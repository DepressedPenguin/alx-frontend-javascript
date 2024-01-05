export default function handleResponseFromAPI(promise) {
  const object_containt = { status: 200, body: 'success' };

  return promise
    .then(() => object_containt)
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}
