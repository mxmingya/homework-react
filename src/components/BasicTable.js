import React from 'react';
import axios from 'axios';

class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      locations: [],
      headers: [],
      polluted_locations: [],
      unpolluted_locations: [],
      showing_locations: [],
      wantedKeys: {
        'locationId': 'Id',
        'location': 'Address',
        'isMobile': 'Mobility',
        'parameter': 'Parameter', 
        'unit': 'Unit',
        'value': 'Value'
      }
    };
  }

  async componentDidMount() {
    await axios.get(`https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements?date_from=2000-01-01T00%3A00%3A00%2B00%3A00&date_to=2021-06-18T01%3A32%3A00%2B00%3A00&limit=100&page=1&offset=0&sort=desc&radius=1000&order_by=datetime`)
      .then(res => {
        const response_array = res.data.results;
        
        this.setState( { 
            locations: response_array, 
            // only keep the headers that we care about. 
            headers: response_array != null && response_array.length > 0 
            ? Object.keys(response_array[0]).filter(k => k in this.state.wantedKeys) 
            : [] });
        
        this.state.locations.forEach(location => {
            if (location.unit === "µg/m³" && location.value >= 5) {
                this.setState({
                    polluted_locations: [...this.state.polluted_locations, location]})
            } else {
                this.setState({
                    unpolluted_locations: [...this.state.unpolluted_locations, location]})
            }
        });
        if (this.props.show_airpolluted) {
            this.setState({ showing_locations: this.state.polluted_locations})
        } else {
            this.setState({ showing_locations: this.state.unpolluted_locations})
        }
        // console.log(this.state.polluted_locations)        
      }).catch( e => {
        console.log(e);
      })
  }

  render() {
    return (
      <table>
        <thead>
        <tr>
            { this.state.headers.map( header => <th> {header} </th> ) }
        </tr>
        </thead>
        <tbody>
          { this.state.showing_locations.map(location => 
            <tr>
                <td key={location.locationId}> {location.locationId }</td>    
                <td key={location.locationId + "_" + location.location}> {location.location }</td>    
                <td key={location.locationId + "_" + location.isMobile}> {location.isMobile }</td>    
                <td key={location.locationId + "_" + location.parameter}> {location.parameter }</td>    
                <td key={location.locationId + "_" + location.unit}> {location.unit }</td>    
                <td key={location.locationId + "_" + location.value}> {location.value }</td>    
            </tr>
          ) } 
        </tbody>
      </table>
    )
  }
}

export default BasicTable;
