import React from "react";

function TodoList({ items }) {
  return (
    <div>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <div>
          <h1 className="header">Todo List</h1>
          <ul className="list">
            {items.map(({ id }) => (
              <li>
                <label>
                  <input key={id} type="checkbox" />
                </label>
                <button className="btn btn-danger">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
}

export default TodoList;
