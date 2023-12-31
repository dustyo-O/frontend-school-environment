const UNSPLASH_COLORS = ['black_and_white', 'black', 'white', 'yellow', 'orange', 'red', 'purple', 'magenta', 'green', 'teal', 'blue'];

function selectColor(container: HTMLElement, onSelect: (value: string) => void) {
  const select = document.createElement('select');
  select.classList.add('select-color');

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
    onSelect((target as HTMLSelectElement).value);
  });

  container.appendChild(select);

  return select;
}

export { selectColor };
