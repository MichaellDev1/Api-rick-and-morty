import { useState, useEffect } from "react";
import getEpisode from "../Services/getEpisode";
import useSearchResult from "./useLoadingError";

export default function useEpisode() {
  const [searchEpisode, setSearchEpisode] = useState();
  const [pages, setPages] = useState(-1);
  const {error,isError,isLoading,loading} = useSearchResult()

  const [episode, setEpisode] = useState([]);
  const handleSearchEpisode = (keyword) => setSearchEpisode(keyword);

  const [nextPage, getNextPage] = useState(0);


  useEffect(() => {
    isLoading(true);
    getEpisode({ page: nextPage })
      .then((res) => {
        const {episodes, pages} = res;
        setEpisode(episodes);
        setPages(pages)
        isLoading(false);
        isError(false);
      })
      .catch((e) => {
        isError(true);
        isLoading(false);
      });
  }, []);

  useEffect(() => {
    if (searchEpisode || pages !== -1){
      isLoading(true);
    getEpisode({ name: searchEpisode, page: nextPage})
      .then((res) => {
        const {episodes, pages} = res;
        setEpisode(episodes);
        setPages(pages)
        isLoading(false);
        isError(false);
      })
      .catch((e) => {
        isError(true);
        isLoading(false);
      });
    }
  }, [searchEpisode,nextPage]);

  return { error, loading, handleSearchEpisode, episode, nextPage, getNextPage, pages};
}
