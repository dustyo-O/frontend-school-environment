const UNSPLASH_COLORS = ['black_and_white', 'black', 'white', 'yellow', 'orange', 'red', 'purple', 'magenta', 'green', 'teal', 'blue'];

function selectColor(container, onSelect) {
  const select = document.createElement('select');

  const placeholderOption = document.createElement('option');
  placeholderOption.textContent = 'Выберите цвет...';
  select.appendChild(placeholderOption);

  for (const color of UNSPLASH_COLORS) {
    const option = document.createElement('option');

    option.textContent = color;
    option.value = color;

    select.appendChild(option);
  }
  select.addEventListener('change', ({ target }) => {
    onSelect(target.value);
  });

  container.appendChild(select);

  return select;
}

export { selectColor };
