import { API_CHARACTERS } from "./config";

function dataCharacter(data) {
  const { results, info } = data;
  const { pages } = info;

  const characters = results.map((res) => {
    const { gender, image, name, species, status } = res;
    return { gender, image, name, species, status };
  });

  return { characters, pages };
}

export default function getSearchCharacter({ name, page = 1}) {
  const api = `${API_CHARACTERS}${ name ? `?name=${name}` : `/?page=${page}`}`;
  return fetch(api)
    .then((response) => response.json())
    .then(dataCharacter);
}

