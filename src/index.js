import React from 'react';
import ReactDOM from 'react-dom';
import BasicTable from './components/BasicTable'

ReactDOM.render(
  <BasicTable show_airpolluted={false} />,
  document.getElementById('form1')
);

ReactDOM.render(
  <BasicTable show_airpolluted={true} />,
  document.getElementById('form2')
);