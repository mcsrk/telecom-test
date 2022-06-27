import { createContext } from "react";

export default createContext({
  // States
  searchTerm: null,
  queryType: null,

  // Pagination
  totalCount: null,
  pageNumber: null,
  limit: null,

  // Logic
  isCharacters: null,
  isComics: null,

  // Setters
  setSearchTerm: () => {},
  setQueryType: () => {},

  setTotalCount: () => {},
  setPageNumber: () => {},
  setLimit: () => {},

  setIsComics: () => {},
  setIsCharacters: () => {},
});
