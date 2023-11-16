import "./styles.css";
import AddNewItemForm from "./AddNewItemForm.jsx";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(label) {
    const newItem = {
      label,
      id: crypto.randomUUID(),
    };
    const nextItems = [...items, newItem];
    setItems(nextItems);
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  return (
    <>
      <AddNewItemForm handleAddItem={handleAddItem} />
      <div>
        <h1 className="header">Todo List</h1>
        <ul className="list">
          {items.map(({ id, label }) => (
            <li key={id}>
              <label>
                <input type="checkbox" id={id} />
                {label}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteItem(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
