const { ChangeUserButton } = require('./components/NavBar/NavBarStyled');

import { render, screen } from '@testing-library/react';

test('change background color to green and the text to white when hover the button', () => {
  const backgColor = '#135846';
  const textColor = '#FFFFFF';

  render(<ChangeUserButton backgColor={backgColor} textColor={textColor} />);
  const colorButton = screen.getByRole('button');

  expect(colorButton).toHaveStyle(`background-color: #135846`);
  expect(colorButton).toHaveStyle(`color: #FFFFFF`);
});

test('change background color to grey and the text to black when not hover the button', () => {
  const backgColor = '#135846';
  const textColor = '#FFFFFF';

  render(<ChangeUserButton backgColor={backgColor} textColor={textColor} />);
  const colorButton = screen.getByRole('button');

  expect(colorButton).toHaveStyle(`background-color: #F0F0F0`);
});