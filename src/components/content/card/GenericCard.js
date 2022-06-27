import { List } from "antd";

// Consts
const { Item } = List;

const GenericCard = ({ id, children, heigth }) => {
  return (
    <Item
      key={id}
      className="shadow-sm rounded max-w-md hover:bg-gray-200 hover:shadow-md"
      style={{ height: heigth ?? null }}
    >
      {children}
    </Item>
  );
};

export default GenericCard;
