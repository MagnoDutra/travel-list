import { useState } from "react";
import Item from "./Item.jsx";

function PackingList({ initialItems, onDelete, onUpdateItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = initialItems;

  if (sortBy === "description")
    sortedItems = [...initialItems].sort((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sortBy === "packed")
    sortedItems = [...initialItems].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            {...item}
            onDelete={onDelete}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
      <div className="actions" onChange={(e) => setSortBy(e.target.value)}>
        <select value={sortBy}>
          <option value="input">Filtrar por ordem de inclusão</option>
          <option value="description">Filtrar por ordem alfabetica</option>
          <option value="packed">Filtrar por ordem do status</option>
        </select>
        <button onClick={onClearList}>Limpar Lista</button>
      </div>
    </div>
  );
}

export default PackingList;
