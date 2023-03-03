import { API_LOCATIONS } from "./config";

function dataEpisode(data) {
  const { results, info } = data;

  const { pages } = info;

  const location = results.map((res) => {
    const { dimension, name, type } = res;

    return { dimension, name, type };
  });

  return {location, pages};
}

export default function getLocation({ page = 1, name }) {
  const api = `${API_LOCATIONS}${name ? `?name=${name}` : `/?page=${page}`}`;
  return fetch(api)
    .then((response) => response.json())
    .then(dataEpisode);
}
