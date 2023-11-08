import React from "react";

const [item, addItem] = React.useState("");

function handleAddItem(event) {
  event.preventDefault();
}

function NewItem() {
  return (
    <form onSubmit={handleAddItem} className="new-item-form">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" required={true} />
      <button className="btn">Add</button>
    </form>
  );
}

export default NewItem;
