import { List } from "antd";

// Consts
const { Item } = List;

const GenericCard = ({ id, children }) => {
  return (
    <Item
      key={id}
      className="flex justify-center items-center bg-gray-50 shadow-sm rounded max-w-md hover:bg-gray-100 hover:shadow-md"
    >
      {children}
    </Item>
  );
};

export default GenericCard;
