import { useCallback, useContext, useMemo, useRef } from "react";
import { List } from "antd";

// Context
import MarvelContext from "context/marvelContext";

// Custom hooks
import useMarvelAPISearch from "hooks/useMarvelAPISearch";

// Components
import CharacterCard from "./card/CharacterCard";
import InfoMessagesScroll from "./InfoMessagesScroll";

const CharacterList = () => {
  const { setPageNumber } = useContext(MarvelContext);
  const { loading, error, characters, hasMore, noResults } =
    useMarvelAPISearch();

  const observer = useRef();
  const triggerNextPageEleRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, setPageNumber]
  );

  return useMemo(
    () => (
      <>
        <List
          className="mx-auto mt-12 w-3/5 rounded-md shadow-lg  custom-list bg-white custom-list"
          size="small"
          footer={
            <InfoMessagesScroll
              loading={loading}
              error={error}
              noResults={noResults}
              hasMore={hasMore}
            />
          }
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={characters}
          renderItem={(character, index) => {
            if (characters.length - 5 === index + 1) {
              return (
                <div ref={triggerNextPageEleRef} key={character?.id + "ref"}>
                  <CharacterCard character={character} />
                </div>
              );
            } else {
              return <CharacterCard character={character} />;
            }
          }}
        />
      </>
    ),
    [characters, loading, triggerNextPageEleRef, hasMore, noResults, error]
  );
};

export default CharacterList;
