import { createContext } from "react";

export default createContext({
  queryType: null,
  setQueryType: () => {},

  // Logic
  isCharacters: null,
  isComics: null,
  setIsComics: () => {},
  setIsCharacters: () => {},

  // Selected Character
  selectedCharacter: null,
  setSelectedCharacter: () => {},

  // COMICS Query states
  comicSearchTerm: null,
  comicTotalCount: null,
  comicPageNumber: null,
  comicLimit: null,

  setComicSearchTerm: () => {},
  setComicTotalCount: () => {},
  setComicPageNumber: () => {},
  setComicLimit: () => {},

  // CHARACTERS Query states
  characterSearchTerm: null,
  characterTotalCount: null,
  characterPageNumber: null,
  characterLimit: null,

  setCharacterSearchTerm: () => {},
  setCharacterTotalCount: () => {},
  setCharacterPageNumber: () => {},
  setCharacterLimit: () => {},
});
