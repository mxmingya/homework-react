import React from 'react';
import {cleanup, fireEvent, queryByPlaceholderText, render, screen} from '@testing-library/react';
import Form from './components/Form';

// // Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// // unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

it('Form renders', () => {
  const {queryByLabelText, getByLabelText} = render(<Form />);

  expect(queryByLabelText(/start date:/i)).toBeTruthy();
  expect(queryByLabelText(/end date:/i)).toBeTruthy();

  fireEvent.change(queryByPlaceholderText("2000-01-01"));

//   expect(queryByLabelText(/on/i)).toBeTruthy();
});