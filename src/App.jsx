import "./styles.css";
import NewItem from "./NewItem.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";

const [items, setItems] = useState([]);

function handleAddItem(label) {
  const newItem = {
    label,
    id: math.random(),
  };
  const nextItems = [...items, newItem];
  setItems(nextItems);
}

function App() {
  return (
    <>
      <NewItem handleAddItem={handleAddItem} />
      <TodoList />
    </>
  );
}

export default App;
