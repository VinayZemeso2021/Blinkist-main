import React from 'react'
import { render, screen } from '@testing-library/react';
import Button from '.';

test('it is renders Button', () => {
  render(<Button children="Hello" />);
  const typoElement = screen.getByRole('button');
  expect(typoElement).toBeInTheDocument();
});
