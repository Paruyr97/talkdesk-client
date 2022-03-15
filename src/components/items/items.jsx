import Item from "../item/item";

const Items = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Items;
