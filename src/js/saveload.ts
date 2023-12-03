function load(item: string) {
  const value = localStorage.getItem(item);

  return value;
}

function save(item: string, value: string) {
  localStorage.setItem(item, value);
}

export { save, load };
