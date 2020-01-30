export default async function updateStateWithData(url, stateUpdateCallback, property = null) {
  try {
    const res = await fetch(url);
    const resJSON = await res.json();
    if (property === null) {
      stateUpdateCallback(resJSON);
    } else {
      stateUpdateCallback(resJSON[property]);
    }
  } catch (error) {
    throw new Error(error);
  }
}
