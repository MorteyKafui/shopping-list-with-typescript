import './App.css';
import ShoppingList from './components/ShoppingList';
import { useState } from 'react';
import ShoppingListForm from './components/ShoppingListForm';

// const items = [
//   { id: 1, productName: 'Lemon', quantity: 2 },
//   { id: 2, productName: 'Pepperoni', quantity: 5 },
//   { id: 1, productName: 'Mushroom', quantity: 1 },
// ];

interface Item {
  id: number;
  product: string;
  quantity: number;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number) => {
    setItems(prev => [{ id: Math.random(), product, quantity }, ...prev]);
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className='container'>
      <h1>💻 Kafui's Shopping List 😜</h1>
      <ShoppingListForm addItem={addItem} />
      <ShoppingList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
