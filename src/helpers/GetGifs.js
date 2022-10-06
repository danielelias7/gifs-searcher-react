export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search`;
  const apiKey = 'dj9DFCgisDcw3JFjEmQFNaEY7rmRdO4x';
  const limit = 10;

  const response = await fetch(`${ url }?api_key=${ apiKey }&q=${ category }&limit=${ limit }`);
  const { data } = await response.json();

  const gifs = data.map(item => ({
      id: item.id,
      title: item.title,
      url: item.images.downsized_medium.url
    })
  )
  return gifs;
}