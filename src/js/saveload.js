export function load(item) {
  const value = localStorage.getItem(item);

  return value;
}

export function save(item, value) {
  console.error('hi!');
  localStorage.setItem(item, value);
}
