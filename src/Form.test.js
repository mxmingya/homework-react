import React from 'react';
import {cleanup, fireEvent, queryByPlaceholderText, render, screen} from '@testing-library/react';
import Form from './components/Form';

// // Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// // unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

it("Form renders", () => {
  const {queryByLabelText, getByLabelText} = render(<Form />);

  expect(queryByLabelText(/sort/i)).toBeTruthy();
  expect(queryByLabelText(/order by/i)).toBeTruthy();
});

it("Form input value changes", () => {
  const {queryByLabelText, getByLabelText} = render(<Form />);
  
  fireEvent.change(queryByLabelText("sort:"), {target: {value: "test_string"}});
  expect(queryByLabelText("sort:").value).toBe("test_string");
})