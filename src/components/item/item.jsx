const Item = ({ item }) => {
  return (
    <li>
      <div className="app-item">
        <div className="box-info">
          <div className="box-info--content">
            <div className="description">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
            <div className="tags">
              {item.categories.map((category, idx) => (
                <span key={idx}>{category} / </span>
              ))}
            </div>
          </div>
          <div className="box-info--footer">
            <ul>
              {item.subscriptions.map((subscribtion, idx) => {
                return (
                  <li key={idx}>
                    <span>{subscribtion.name}</span>
                    <h3>
                      {subscribtion.price}
                      <sup></sup>
                    </h3>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;
