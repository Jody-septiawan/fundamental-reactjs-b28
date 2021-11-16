function List(props) {
  const { listData, color, qty } = props;

  return (
    <>
      <h1>
        {listData} - Color: {color} - QTY: {qty}
      </h1>
    </>
  );
}

export default List;
