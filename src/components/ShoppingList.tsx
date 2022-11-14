import Card from './Card';

interface Item {
  id: number;
  product: string;
  quantity: number;
  // deleteItem: (id: number) => void;
}

interface ShoppoingListProps {
  items: Item[];
  deleteItem: (id: number) => void;
}

const ShoppingList = ({ items, deleteItem }: ShoppoingListProps) => {
  return (
    <div>
      <p className='notify'>
        NB: Click to <span>DELETE</span> a product.{' '}
      </p>
      {items.map(item => (
        <Card key={item.id} {...item} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default ShoppingList;
