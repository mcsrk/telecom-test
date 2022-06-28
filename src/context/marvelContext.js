import { createContext } from "react";

export default createContext({
  // Query states
  searchTerm: null,
  queryType: null,

  // Pagination
  totalCount: null,
  pageNumber: null,
  limit: null,

  // Logic
  isCharacters: null,
  isComics: null,

  // Selected Character
  selectedCharacter: null,

  // Setters
  setSearchTerm: () => {},
  setQueryType: () => {},

  setTotalCount: () => {},
  setPageNumber: () => {},
  setLimit: () => {},

  setIsComics: () => {},
  setIsCharacters: () => {},

  setSelectedCharacter: () => {},
});
