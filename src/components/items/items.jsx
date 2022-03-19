import PropTypes from "prop-types";

import { notFound } from "../../constants";
import Item from "../item/item";

const Items = ({ data }) => {
  if (!data.length) {
    return <h1 style={{ textAlign: "center" }}>{notFound}</h1>;
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

Items.propTypes = {
  data: PropTypes.array.isRequired,
};
