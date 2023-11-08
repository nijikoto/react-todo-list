import React from "react";
import { useState } from "react";

function AddNewItemForm({ handleAddItem }) {
  const [label, setLabel] = useState("");

  return (
    <form
      className="new-item-form"
      onSubmit={(event) => {
        event.preventDefault();
        handleAddItem(label);
        setLabel("");
      }}>
      <label htmlFor="item">New Item</label>
      <input
        type="text"
        id="item"
        value={label}
        onChange={(event) => {
          setLabel(event.target.value);
        }}
      />
      <button className="btn">Add</button>
    </form>
  );
}

export default AddNewItemForm;
