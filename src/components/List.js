import React from "react"
import axios from 'axios';

const list = () => {
    return (
        <h1 id='root'> </h1>
    );
}


class List extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { measurements: [] };
//     this.props = { url: `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements?date_from=2000-01-01T00%3A00%3A00%2B00%3A00&date_to=2021-06-18T01%3A32%3A00%2B00%3A00&limit=100&page=1&offset=0&sort=desc&radius=1000&order_by=datetime` }
//   }

//   componentDidMount() {
//     axios.get(this.props.url)
//       .then(res => {
//         const persons = res.data;
//         console.log(persons)
//         this.setState( state => {
//             state
//         }  );
//       })
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.measurements}
//       </ul>
//     );
//   }
}

export default List;