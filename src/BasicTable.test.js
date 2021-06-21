import React from 'react';
import {cleanup, fireEvent, queryByPlaceholderText, render, screen} from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import BasicTable from './components/BasicTable';
import TableRow from './components/TableRow';
import { expect as expect_chai } from 'chai';
import { shallow, mount, configure } from 'enzyme';

// // Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// // unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

configure({adapter: new Adapter()});

describe('test BasicTable', () => {

  it("render tables", () => {
    const {queryByRole, getByRole} = render(<BasicTable />);

    expect(queryByRole("table")).toBeTruthy();
  })

  it("table component", () => {
    // const wrapper = shallow(<BasicTable wantedKeys="{key1:val1}" location="{id:123}"/>);
    const wrapper = shallow(<BasicTable show_airpolluted={false} />);
    
    /*
      headers: [],
      polluted_locations: [],
      unpolluted_locations: [],
      showing_locations: [],
      caption: '',
      wantedKeys: {
        id: 'Id',
        name: 'Name',
        coordinates: 'Corrdinates',
        country: 'Country',
        entity: 'Entity',
        lastUpdated: 'lastUpdated',
        parameter: 'Parameter',
        unit: 'Unit',
        average: 'average'
      } 
    */
    expect_chai(wrapper.state().locations).to.have.lengthOf(0);
    expect_chai(wrapper.state().headers).to.have.lengthOf(0);
    expect_chai(wrapper.state().unpolluted_locations).to.have.lengthOf(0);
    expect_chai(wrapper.state().showing_locations).to.have.lengthOf(0);
    expect_chai(wrapper.state().caption).to.equals("");
    expect_chai(wrapper.state().wantedKeys["id"]).to.equals("Id");
    expect_chai(wrapper.state().wantedKeys["name"]).to.equals("Name");
    expect_chai(wrapper.state().wantedKeys["coordinates"]).to.equals("Corrdinates");
    expect_chai(wrapper.state().wantedKeys["country"]).to.equals("Country");
    expect_chai(wrapper.state().wantedKeys["entity"]).to.equals("Entity");
    expect_chai(wrapper.state().wantedKeys["lastUpdated"]).to.equals("lastUpdated");
    expect_chai(wrapper.state().wantedKeys["parameter"]).to.equals("Parameter");
    expect_chai(wrapper.state().wantedKeys["unit"]).to.equals("Unit");
    expect_chai(wrapper.state().wantedKeys["average"]).to.equals("average");
  })

  it("table row component", () => {
    const wrapper = mount(<TableRow wantedKeys={{"key1":"val1"}} location={{"id":123}}/>);
    
    expect_chai(wrapper.props()["wantedKeys"]["key1"]).to.equals("val1")
    expect_chai(wrapper.props()["location"]["id"]).to.equals(123)
  })
});

// Ignore the disruptive error msgs from `mount()` 
console.error = jest.fn()

