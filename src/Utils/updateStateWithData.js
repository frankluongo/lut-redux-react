// This function updates app state with api data. It's being deprecated for the Redux Portion of this tutorial, but is useful to keep around
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
