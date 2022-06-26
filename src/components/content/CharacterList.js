import { useMemo } from "react";
import { List } from "antd";

// Components
import CharacterCard from "./card/CharacterCard";

const CharacterList = ({ loading, characters }) => {
  return useMemo(
    () => (
      <List
        loading={loading}
        className="mx-auto mt-12 w-3/5 rounded-md shadow-lg  custom-list bg-white custom-list"
        size="small"
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
        renderItem={(character) => <CharacterCard character={character} />}
      />
    ),
    [loading, characters]
  );
};

export default CharacterList;
