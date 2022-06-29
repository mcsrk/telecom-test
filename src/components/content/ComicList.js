import { List } from "antd";
import { useMemo, useContext, useRef, useCallback } from "react";

// Context
import MarvelContext from "context/marvelContext";

// Custom hooks
import useComicSearch from "hooks/useComicSearch";

// Components
import ComicCard from "./card/ComicCard";
import InfoMessagesScroll from "./InfoMessagesScroll";

const ComicList = ({ height = 500 }) => {
  const { setComicPageNumber, selectedCharacter } = useContext(MarvelContext);

  const { loading, error, comics, hasMore, noResults } = useComicSearch(
    selectedCharacter ? `characters/${selectedCharacter?.id}/comics` : "comics"
  );

  const observer = useRef();
  const triggerNextPageEleRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setComicPageNumber((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, setComicPageNumber]
  );

  return useMemo(
    () => (
      <List
        className="mx-auto mt-12 max-w-max rounded-md shadow-lg bg-white custom-list"
        style={{ overflow: "auto", height: height + "px" }}
        size="small"
        footer={
          <InfoMessagesScroll
            loading={loading}
            error={error}
            noResults={noResults}
            hasMore={hasMore}
          />
        }
        dataSource={comics}
        renderItem={(comic, index) => {
          if (comics.length - 8 === index + 1) {
            return (
              <div ref={triggerNextPageEleRef} key={comic?.id + "ref"}>
                <ComicCard comicInfo={comic} />
              </div>
            );
          } else {
            return <ComicCard comicInfo={comic} />;
          }
        }}
      />
    ),
    [comics, loading, triggerNextPageEleRef, hasMore, noResults, error, height]
  );
};
export default ComicList;
