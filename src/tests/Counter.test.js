import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

const testCriteria = `initial counter value should be 0 and there is a count button`;
const incrementTestCriteria = `onClick the counter will increment from 0 to 1 to 2`;
const inputElementTest = `input value show start with 10`;

test(testCriteria, () => {
  render(<Counter />);
  const counterElement = screen.getByTestId('cnt');
  const countText = screen.getByText(/count/i);
  expect(counterElement).toBeInTheDocument();
  expect(countText).toBeInTheDocument();
});

test(incrementTestCriteria, () => {
  render(<Counter />);
  const btn1 = screen.getByTestId('btn');
  const counterElement = screen.getByTestId('cnt');
  expect(counterElement).not.toBeNull();
  expect(counterElement.textContent).toBe('0');
  fireEvent.click(btn1);
  expect(counterElement.textContent).not.toBe('2');
  fireEvent.click(btn1);
  expect(counterElement.textContent).toBe('2');
});

test(inputElementTest, () => {
  render(<Counter />);
  const inputElement = screen.getByTestId('inputVal');
  expect(inputElement.value).toBe('');
});
