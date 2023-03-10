import { API_EPISODES } from "./config";

function dataEpisode(data) {
  const { info, results } = data;

  const { pages } = info;

  const episodes = results.map((res) => {
    const { episode, name, air_date, characters, id } = res;

    return { episode, name, air_date, characters };
  });

  return { pages, episodes };
}

export default function getEpisode({ page = 1, name }) {
  const api = `${API_EPISODES}/${name ? `?name=${name}` : `/?page=${page}`}`;
  return fetch(api)
    .then((response) => response.json())
    .then(dataEpisode);
}
