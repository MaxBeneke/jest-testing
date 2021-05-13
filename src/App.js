import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [listItems, setListItems] = useState([]);
  const [newItemText, setNewItemText] = useState('')

  const handleCounterClick = value => {
    setCounter( counter => counter + value)
  }

  const handleNewItemChange = e => {
    setNewItemText(e.target.value)
  }

  const handleAddItem = e => {
    e.preventDefault();
    setListItems([...listItems, {
      text: newItemText, id: listItems.length
    }
  ])
  setNewItemText('')
  }

  const handleRemoveItem = id => {
    const newListItems = listItems.filter(item => item.id !== id)
    setListItems(newListItems)
  }

  const listItemComponents = listItems.map( item => {
    return (
      <li
        data-testid={`item${item.id}`}
        key={item.id}
      >
        {item.text}
        <button
          data-testid={`remove-item${item.id}`}
          onClick={() => handleRemoveItem(item.id)}
          >
            Remove
        </button>
      </li>
    )
  })

  return (
    <div>
      <p> Counter: 
        <span data-testid="counter-value">{counter}</span>
      </p>

      <button onClick={() => handleCounterClick(1)}>Increment</button>
      <button 
      onClick={() => handleCounterClick(-1)}
      disabled={counter <= 0}
      >
        Decrement
      </button>
      <form onSubmit={handleAddItem}>
        <label
          htmlFor="newItem"
        >
          Create List item
        <input
          id="newItem"
          value={newItemText} 
          onChange={handleNewItemChange}
        />
        </label>
        <input 
          data-testid="add-item"
          type="submit"
          value="Add Item"    
        />
      </form>
      <ul> 
        {listItemComponents}
      </ul>
    </div>
  );
}

export default App;
