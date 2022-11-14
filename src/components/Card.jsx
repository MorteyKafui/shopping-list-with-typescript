const Card = ({ id, product, quantity, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(id);
  };

  return (
    <div className='card' onClick={handleDelete}>
      <h3>{product}</h3>
      <p>{quantity}</p>
    </div>
  );
};

export default Card;
