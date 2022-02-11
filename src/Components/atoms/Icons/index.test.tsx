import React from 'react';
import {render, screen } from '@testing-library/react';
import Icon from '.';
import AddIcon from '@mui/icons-material/Add';

test('it should be render passed icon', () => {
  render(<Icon icon={<AddIcon data-testid='add-icon'/>}/>);
  const iconElement = screen.getByTestId('add-icon');;
  expect(iconElement).toBeInTheDocument();
});