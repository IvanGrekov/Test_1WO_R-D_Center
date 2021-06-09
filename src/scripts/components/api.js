export function sendQuery(address, options = {}) {
  return fetch(address, options)
    .then(resonse => resonse.json())
    .catch(console.log);
}
