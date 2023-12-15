import { fireEvent, screen } from '@testing-library/dom';
import { selectColor } from './select-color';

const onSelect = jest.fn();

test('select-color', () => {
  selectColor(document.body, onSelect);

  const select = screen.getByText('Выберите цвет...');

  expect(select).toBeVisible();

  fireEvent.change(select!, { target: { value: 'red' } });

  expect(select).toHaveValue('red');
  expect(onSelect).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith('red');
});
