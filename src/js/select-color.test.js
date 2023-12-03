import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { selectColor } from './select-color';

test('select-color', () => {
  selectColor(document.body);

  const select = screen.getByText('Выберите цвет...');

  expect(select).toBeVisible();

  select.click();

  const red = screen.getByText('red');
  const green = screen.getByText('green');

  expect(red).toBeVisible();
  expect(green).toBeVisible();

  red.click();

  expect(screen.getByRole(''))
});
