function selectQuoteTags(container, onSelect) {
  const select = document.createElement('select');
  select.disabled = true;

  const loadingOption = document.createElement('option');
  loadingOption.textContent = 'Загрузка...';
  loadingOption.selected = true;
  select.appendChild(loadingOption);

  fetch('https://api.quotable.io/tags')
    .then((response) => response.json())
    .then((tagsJson) => {
      const tags = tagsJson.filter((tag) => tag.quoteCount > 10);

      return tags;
    })
    .then((tags) => {
      loadingOption.textContent = 'Choose topic...';

      for (const tag of tags) {
        const option = document.createElement('option');

        option.textContent = tag.name;
        option.value = tag.slug;

        select.appendChild(option);
      }

      select.disabled = false;
      select.addEventListener('change', ({ target }) => {
        onSelect(target.value);
      });
    });

  container.appendChild(select);

  return select;
}

export { selectQuoteTags };
