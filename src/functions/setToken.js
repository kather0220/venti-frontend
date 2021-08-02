export default function setToken(key, value, id) {
  //const now = new Date();
  const item = {
    value: value,
    userId: id,
  };
  localStorage.setItem(key, JSON.stringify(item));
}
