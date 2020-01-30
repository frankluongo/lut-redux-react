export function getImagePath(basePath, imagePath, dimensions) {
  if (imagePath === undefined || imagePath === '') {
    return `https://source.unsplash.com/random/${dimensions}154x231`
  } else {
    return `${basePath}${imagePath}`;
  }

}

export function getMovieId(props) {
  return props.match.params.id;
}
