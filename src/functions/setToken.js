export default function setToken(key, value, id) {
  const now = new Date();
  const item = {
    value: value,
    userId: id,
    expiry: now.getTime() + 39600000,
  };
  localStorage.setItem(key, JSON.stringify(item));
}
