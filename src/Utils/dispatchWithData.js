export default async function dispatchWithData(dispatch, url, type, property = null) {
  try {
    const res = await fetch(url);
    const resJSON = await res.json();
    if (property === null) {
      return dispatch({
        type,
        data: resJSON
      });
    } else {
      dispatch({
        type,
        data: resJSON[property]
      });
    }
  } catch (error) {
    throw new Error(error);
  }
}
