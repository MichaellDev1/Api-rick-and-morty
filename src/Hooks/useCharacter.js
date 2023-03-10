import { useState, useEffect } from "react";
import getSearchCharacter from "../Services/getSearchCharacter";
import useLoadingError from "./useLoadingError";

let INITIAL_PAGE = -1;

export default function useCharacter({ page = null, characterSearch = null }) {
  const { error, loading, isError, isLoading } = useLoadingError();
  const [searchCharacter, setSearchCharacter] = useState();
  const [pages, setPages] = useState(INITIAL_PAGE);
  const [character, setCharacter] = useState([]);
  const [nextPage, getNextPage] = useState(INITIAL_PAGE);

  const handleSearchCaracter = (keyword) => setSearchCharacter(keyword);

  useEffect(() => {
    const pagesNext = page || nextPage;
    isLoading(true);
    getSearchCharacter({ page: pagesNext })
      .then((res) => {
        const { pages, characters } = res;
        setCharacter(characters);
        setPages(pages);
        isLoading(false);
        isError(false);
      })
      .catch((e) => {
        isLoading(false);
        isError(true);
      });
  }, []);


  useEffect(() => {
     if (searchCharacter || nextPage !== -1 || characterSearch){
      const pagesNext = page || nextPage;
      isLoading(true);
  
      const characterss = characterSearch || searchCharacter;

      if (searchCharacter) localStorage.setItem("character", searchCharacter);
  
      getSearchCharacter({ name: characterss, page: pagesNext })
        .then((res) => {
          const { characters, pages } = res;
          setPages(pages);
          setCharacter(characters);
          isLoading(false);
          isError(false);
        })
        .catch((e) => {
          isError(true);
          isLoading(false);
        });
     }
    }, [nextPage,searchCharacter]);

  return {
    loading,
    error,
    handleSearchCaracter,
    character,
    pages,
    getNextPage,
    nextPage,
    setSearchCharacter,
  };
}
