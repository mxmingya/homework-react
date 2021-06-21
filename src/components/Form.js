import axios from 'axios';
import React from 'react'
import ReactDOM from 'react-dom';
import BasicTable from './BasicTable'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {start_date: '', end_date: ''};
    
        this.handleStartdateChange = this.handleStartdateChange.bind(this);
        this.handleEnddateChange= this.handleEnddateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleStartdateChange(event) {
        // TODO: Adding sanity check on the input
        this.setState({start_date: event.target.value});
    }

    handleEnddateChange(event) {
        // TODO: Adding sanity check on the input
        this.setState({end_date: event.target.value});
    }
  
    handleSubmit(event) {
        ReactDOM.render(
            <BasicTable show_airpolluted={true} start_date={this.state.start_date} end_date={this.state.end_date} />,
            document.getElementById('table2')
          );
          ReactDOM.render(
            <BasicTable show_airpolluted={false} start_date={this.state.start_date} end_date={this.state.end_date} />,
            document.getElementById('table1')
          );
      event.preventDefault();
    }
  
    render() {
    // TODO: make a text input component to reduce the code repeabilities. 
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            start date:
            <input type="text" placeholder="2000-01-01" value={this.state.start_date} onChange={this.handleStartdateChange} />
          </label>
          <br></br>
          <label>
            end date: 
            <input type="text" placeholder="2021-06-20" value={this.state.end_date} onChange={this.handleEnddateChange} />
          </label>
          <br></br>
          <input type="submit" value="Get Air Quality Report by Date" />
        </form>
      );
    }
  }

export default Form;