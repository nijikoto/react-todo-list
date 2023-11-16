import "./styles.css";
import AddNewItemForm from "./AddNewItemForm.jsx";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items));
  }, [items]);

  function handleAddItem(label) {
    const newItem = {
      label,
      id: crypto.randomUUID(),
      completed: false,
    };
    const nextItems = [...items, newItem];
    setItems(nextItems);
    console.log(newItem);
    console.log(newItem.completed);
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  //update the todo to change the id of the todo I pass in here to be completed base on this flag
  function toggleTodo(id, completed) {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          item.completed = completed;
          return { ...item, completed };
        }

        return item;
      });
    });
  }

  return (
    <>
      <AddNewItemForm handleAddItem={handleAddItem} />
      <div>
        <h1 className="header">Todo List</h1>
        <ul className="list">
          {items.map(({ id, label, completed }) => (
            <li key={id}>
              <label>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={(e) => toggleTodo(id, e.target.checked)}
                  id={id}
                />
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
