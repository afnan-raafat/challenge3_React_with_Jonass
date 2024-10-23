import { useState } from "react";

import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  /// دى عبارة عن اراى جديده هتشيل العناصر بالترتيب اللى اليوزر يحدده
  if (sortBy === "input") sortedItems = items; // زى ما العناصر دخلت

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      {/* Buttons & actions  */}
      {/* جزئيه ترتيب العناصر هنستخدمها كتير ######## */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input order</option>
          <option value="description">Sort By Name</option>
          <option value="packed">Sort By packed item</option>
        </select>
        {/* clear all  */}
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
