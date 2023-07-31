import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todos from '../components/Todos';

test('Todos component should render', async () => {
  render(<Todos />);
  const todosElement = await screen.findAllByRole('listitem');
  expect(todosElement).not.toHaveLength(0);
});

test('Todos component check title', () => {
  render(<Todos />);
  const titleElement = screen.getByTestId('todo');
  expect(titleElement.textContent).toBe('Todos');
});
