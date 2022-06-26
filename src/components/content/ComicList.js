import { List } from "antd";
import { useMemo, useContext, useEffect } from "react";

// Utils
import MarvelContext from "context/marvelContext";

// Components
import ComicCard from "./card/ComicCard";

const ComicList = ({ loading, comics }) => {
  const { totalCount, limit, setOffset, setLimit } = useContext(MarvelContext);

  useEffect(() => {
    setLimit("10");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useMemo(
    () => (
      <List
        loading={loading}
        className="mx-auto mt-12 max-w-max rounded-md shadow-lg bg-white custom-list"
        size="small"
        dataSource={comics}
        renderItem={(comic) => <ComicCard comicInfo={comic} />}
        pagination={{
          onChange: (page) => {
            setOffset(limit * (page - 1));
          },
          pageSize: limit,
          showSizeChanger: false,
          total: totalCount,
          size: "small",
          className: "text-center",
        }}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, comics, limit]
  );
};
export default ComicList;
