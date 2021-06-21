import React from 'react';
import {cleanup, fireEvent, queryByPlaceholderText, render, screen} from '@testing-library/react';
import BasicTable from './components/BasicTable';

// // Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// // unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

it("BasicTable renders", () => {
  const {queryByLabelText, getByLabelText} = render(<BasicTable />);

  expect(queryByLabelText(/sort/i)).toBeTruthy();
  expect(queryByLabelText(/order by/i)).toBeTruthy();
});

it("BasicTable input value changes", () => {
  const {queryByLabelText, getByLabelText} = render(<Form />);
  
  fireEvent.change(queryByLabelText("sort:"), {target: {value: "test_string"}});
  expect(queryByLabelText("sort:").value).toBe("test_string");
})