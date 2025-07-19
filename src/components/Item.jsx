import { useState } from "react";

function Item({ id, description, quantity, packed, onDelete, onUpdateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onChange={(e) => onUpdateItem(id, e.target.checked)}
      />
      <span
        style={packed ? { textDecoration: "line-through" } : {}}
      >{`${quantity} ${description}`}</span>
      <button onClick={() => onDelete(id)}>❌</button>
    </li>
  );
}

export default Item;
