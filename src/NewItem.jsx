import React from "react";

function NewItem() {
  return (
    <form className="new-item-form">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" />
      <button className="btn">Add</button>
    </form>
  );
}

export default NewItem;
