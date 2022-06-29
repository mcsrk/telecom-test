import { useContext } from "react";

// Utils
import MarvelContext from "context/marvelContext";

// Consts
import { filterTypeButtons } from "utils/constans";

const getOptionButtons = (
  queryType,
  setQueryType,
  setIsCharacters,
  setIsComics,
  setSelectedCharacter,
  setCharacterSearchTerm,
  setComicSearchTerm
) => {
  const optionButtons = filterTypeButtons.map((e) => {
    const active = e.value === queryType;
    return (
      <span
        key={"option-" + e.value}
        className={`text-sm sm:text-lg m-2 p-1 cursor-pointer font-bold w-32 rounded-3xl shadow-sm text-center text-marveltxt-button ${
          active
            ? "bg-marvelbg-focusBtn text-white"
            : "bg-white hover:bg-gray-100 hover:text-marveltxt-button"
        } `}
        onClick={() => {
          setQueryType(e.value);
          setIsCharacters(e.value === "characters");
          setIsComics(e.value === "comics");
          setSelectedCharacter(null);
          // clear search term
          setCharacterSearchTerm("");
          setComicSearchTerm("");
        }}
      >
        {e.label}
      </span>
    );
  });
  return optionButtons;
};

const FilterType = () => {
  const {
    queryType,
    setQueryType,
    setIsCharacters,
    setIsComics,
    setSelectedCharacter,
    setCharacterSearchTerm,
    setComicSearchTerm,
  } = useContext(MarvelContext);
  return (
    <div className="w-60 sm:w-96 m-6 bg-white shadow-md rounded-3xl flex justify-between">
      {getOptionButtons(
        queryType,
        setQueryType,
        setIsCharacters,
        setIsComics,
        setSelectedCharacter,
        setCharacterSearchTerm,
        setComicSearchTerm
      )}
    </div>
  );
};

export default FilterType;
