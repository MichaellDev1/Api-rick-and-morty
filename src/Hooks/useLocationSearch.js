import React, { useEffect, useState } from "react";
import getLocation from "../Services/getLocation";
import useLoadingError from "./useLoadingError";

export default function useLocationSearch() {
  const [location, setLocation] = useState([]);
  const { error, isError, isLoading, loading } = useLoadingError();
  const [searchLocation, setSearchLocation] = useState();
  const [pages, setPages] = useState();

  const handleSearchLocation = (keyword) => setSearchLocation(keyword);

  const [nextPage, getNextPage] = useState(-1);

  useEffect(() => {
    isLoading(true);
    getLocation({ page: nextPage })
      .then((res) => {
        const { location, pages } = res;
        setPages(pages)
        setLocation(location);
        isLoading(false);
        isError(false);
      })
      .catch((e) => {
        isError(true);
        isLoading(false);
      });
  }, []);

  useEffect(() => {
    if (searchLocation || nextPage !== -1) {
      isLoading(true);
      getLocation({ name: searchLocation, page: nextPage })
        .then((res) => {
          const { location, pages } = res;
          setPages(pages)
          setLocation(location);
          isLoading(false);
          isError(false);
        })
        .catch((e) => {
          isError(true);
          isLoading(false);
        });
    }
  }, [searchLocation, nextPage]);

  return {
    loading,
    error,
    handleSearchLocation,
    location,
    nextPage,
    pages,
    getNextPage,
  };
}
