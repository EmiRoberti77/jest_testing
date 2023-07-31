import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Users from '../components/Users';

test('Users component should render', async () => {
  render(<Users />);
  const usersElement = await screen.findAllByRole('listitem');
  expect(usersElement).not.toHaveLength(0);
});
