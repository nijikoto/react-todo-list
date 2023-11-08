import React from "react";

function NewItem() {
  return (
    <form className="new-item-form" onSubmit={handleAddItem}>
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" required={true} />
      <button className="btn">Add</button>
    </form>
  );
}

export default NewItem;
