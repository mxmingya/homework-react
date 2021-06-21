import React from 'react'
import ReactDOM from 'react-dom';
import BasicTable from './BasicTable'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sorted_by: '', order_by: ''};
    
        this.handleSortedByChange = this.handleSortedByChange.bind(this);
        this.handleOrderByChange = this.handleOrderByChange .bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSortedByChange(event) {
        // TODO: Adding sanity check on the input
        this.setState({sorted_by: event.target.value});
    }

    handleOrderByChange (event) {
        // TODO: Adding sanity check on the input
        this.setState({order_by: event.target.value});
    }
  
    handleSubmit(event) {
        ReactDOM.render(
            <BasicTable show_airpolluted={true} sorted_by={this.state.sorted_by} order_by={this.state.order_by} />,
            document.getElementById('table2')
          );
          ReactDOM.render(
            <BasicTable show_airpolluted={false} sorted_by={this.state.sorted_by} order_by={this.state.order_by} />,
            document.getElementById('table1')
          );
      event.preventDefault();
    }
  
    render() {
    // TODO: make a text input component to reduce the code repeabilities. 
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            sort:
            <input type="text" placeholder="desc or asc" value={this.state.sorted_by} onChange={this.handleSortedByChange} />
          </label>
          <br></br>
          <label>
            order by: 
            <input type="text" placeholder="lastUpdated or firstUpdated" value={this.state.order_by} onChange={this.handleOrderByChange } />
          </label>
          <br></br>
          <input type="submit" value="Get Air Quality Report" />
        </form>
      );
    }
  }

export default Form;