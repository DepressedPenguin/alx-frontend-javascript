export default function handleResponseFromAPI(promise) {
  const conTaint = { status: 200, body: 'success' };

  return promise
    .then(() => conTaint)
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}
