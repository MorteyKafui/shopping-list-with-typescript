import { useState } from 'react';

interface FormProps {
  addItem: (item: string, quantity: number) => void;
}

const ShoppingListForm = ({ addItem }: FormProps) => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text || !number) return alert('Please fill all fields!');

    addItem(text, number);

    setText('');
    setNumber(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Product Name'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        type='number'
        value={number}
        min={0}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ShoppingListForm;
