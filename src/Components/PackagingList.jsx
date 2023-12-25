import React, { useState } from "react";
import Item from "./Item";
const PackagingList = ({ items, setItems }) => {
  const deletehandle = (id) => {
    const filterItems = items.filter((item) => item.id !== id);
    setItems(filterItems);
  };
  const [sortby, setSortby] = useState("input");
  let sortedItems;
  if (sortby === "input") {
    sortedItems =items;
  }
  if (sortby === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  const clear = () => {
    setItems([]);
  };
  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item) => {
          return (
            <li>
              <Item
                key={item.id}
                description1={item.description}
                quantity1={item.quantity}
                packed1={item.packed}
                deletehandle={deletehandle}
                id={item.id}
              />
            </li>
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">sort by description</option>
        </select>
        <button onClick={clear}>clear</button>
      </div>
    </div>
  );
};

export default PackagingList;
