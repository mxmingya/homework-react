import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      keys: [],
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
        console.log(response_array[0])
        this.setState( { locations: response_array, 
                          keys: Object.keys(response_array[0]).filter(k => k in this.state.wantedKeys) });
        // for (let i = 0; i < this.state.locations.length; i++) {
        //   console.log(this.state.locations[i].location)
        // }
        
      }).catch( e => {
        console.log(e);
      })
  }

  render() {
    return (
      <table>
        <thead>
        <tr>
            { this.state.keys.map( key => <th> {key} </th> ) }
        </tr>
        </thead>
        <tbody>
          { this.state.locations.map(location => 
            <tr>
                <td key={location.locationId}> {location.locationId }</td>    
                <td key={location.locationId + " " + location.location}> {location.location }</td>    
                <td key={location.locationId + " " + location.isMobile}> {location.isMobile }</td>    
                <td key={location.locationId + " " + location.parameter}> {location.parameter }</td>    
                <td key={location.locationId + " " + location.unit}> {location.unit }</td>    
                <td key={location.locationId + " " + location.value}> {location.value }</td>    
            </tr>
          ) } 
        </tbody>
      </table>
    )
  }
}

export default BasicTable;
