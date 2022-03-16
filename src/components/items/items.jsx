import Item from "../item/item";

const Items = ({ data }) => {
  if (!data.length) {
    return <h1 style={{ textAlign: "center" }}>App Not Found</h1>;
  }

  return (
    <ul>
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Items;
