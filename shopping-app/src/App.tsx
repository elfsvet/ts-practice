import React, { useState } from 'react';
import './App.css';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import Item from './models/item';
import ShoppingListForm from './components/ShoppingListForm';
import { v4 as getId } from 'uuid';

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    console.log('Made it to   the app component');
    console.log(product);
    setItems([...items, { id: getId(), product, quantity }]);
  };
  // const items = [
  //   { id: 1, product: 'Lemon', quantity: 3 },
  //   { id: 2, product: 'Chicken breast', quantity: 2 },
  // ];

  return (
    <div>
      {/* list and form */}
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
