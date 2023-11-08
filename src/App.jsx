import "./styles.css";
import AddNewItemForm from "./AddNewItemForm.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(label) {
    const newItem = {
      label,
      id: Math.random(),
    };
    const nextItems = [...items, newItem];
    setItems(nextItems);
  }

  return (
    <>
      <AddNewItemForm handleAddItem={handleAddItem} />
      <div>
        <h1 className="header">Todo List</h1>
        <ul className="list">
          <div>
            <ul className="list">
              {items.map(({ id, label }) => (
                <li key={id}>
                  <label>
                    <input type="checkbox" />
                    {label}
                  </label>
                  <button className="btn btn-danger">Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </div>
    </>
  );
}

export default App;
