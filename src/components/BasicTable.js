import React from 'react';
import axios from 'axios';
import '../styles/tableStyle.css'
import TableRow from './TableRow';

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
      caption: "",
      wantedKeys: {
        'id': 'Id',
        'name': 'Name',
        'coordinates': 'Corrdinates',
        'country': 'Country',
        'entity': "Entity",
        'lastUpdated': 'lastUpdated',
        'parameter': 'Parameter', 
        'unit': 'Unit',
        'average': 'average'
      }
    };
  }

    async componentDidMount() {
        await axios.get(`https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/locations`,
            {
                limit: this.props.limit || 100,
                page: 1,
                offset: 0,
                sort: this.props.sort || "desc",
                radius: 1000, 
                order_by: this.props.order_by || "lastUpdated", 
                dumpRaw: this.props.dumpRaw || false
            }
        ).then(
            res => {
                const response_array = res.data.results;
                this.setState( { 
                    locations: response_array, 
                    // only keep the headers that we care about. 
                    headers: Object.keys(this.state.wantedKeys)});
                
                this.state.locations.forEach(location => {
                    const coordinate = location.coordinates.latitude + " " + location.coordinates.longitude;
                    location.coordinates = coordinate;

                    const parameter_array = location.parameters.filter( p => "µg/m³" && p.average >= 5);
                    if (parameter_array.length > 0) {
                        location.parameter = parameter_array[0].parameter;
                        location.average = parameter_array[0].average;
                        location.lastUpdated = parameter_array[0].lastUpdated;
                        location.unit = parameter_array[0].unit;
                        delete location.parameters;
                        this.setState({ polluted_locations: [...this.state.polluted_locations, location] })
                    } else {
                        location.parameter = location.parameters[0].parameter;
                        location.average = location.parameters[0].average;
                        location.lastUpdated = location.parameters[0].lastUpdated;
                        location.unit = location.parameters[0].unit;
                        location.parameter = location.parameter[0];

                        delete location.parameters;
                        this.setState({ unpolluted_locations: [...this.state.unpolluted_locations, location] })
                    }
                });
                console.log(this.state.polluted_locations[0])
                // console.log(this.state.unpolluted_locations)
                if (this.props.show_airpolluted) {
                    this.setState({ 
                        showing_locations: this.state.polluted_locations,
                        caption: "Areas With Air Pollution"
                })} 
                else {
                    this.setState({ 
                        showing_locations: this.state.unpolluted_locations,
                        caption: "Areas With No Air Pollution"
                })
            }
            }
        )
    }

  render() {
    return (
      <table>
        <caption>{ this.state.caption } </caption>
        <thead>
        <tr>
            { this.state.headers.map( header => <th> {header} </th> ) }
        </tr>
        </thead>
        <tbody>
          { this.state.showing_locations.map(location => <TableRow wantedKeys={this.state.wantedKeys} location={location} />) } 
        </tbody>
      </table>
    )
  }
}

export default BasicTable;
