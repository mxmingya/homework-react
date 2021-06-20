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
        this.setState({start_date: event.target.value});
    }

    handleEnddateChange(event) {
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
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            start date: (example, 2021-06-08) 
            <input type="text" value={this.state.start_date} onChange={this.handleStartdateChange} />
          </label>
          <br></br>
          <label>
            end date: (example, 2021-06-20) 
            <input type="text" value={this.state.end_date} onChange={this.handleEnddateChange} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default Form;