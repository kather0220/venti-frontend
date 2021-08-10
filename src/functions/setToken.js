export default function setToken(key, value, id) {
  const item = {
    value: value,
    userId: id,
  };
  localStorage.setItem(key, JSON.stringify(item));
}
