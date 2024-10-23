import { useState } from "react";
import "./index.css";
import Stats from "./Stats";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";

// تطبيفا على ال lifting state up
export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    // معناها هيضيف العنصر الجديد
    setItems((items) => [...items, item]);
  }

  /// Delete function
  function handleDeleteItem(id) {
    setItems((item) => items.filter((item) => item.id !== id));
  }
  /// Check Box function
  function handleToggleItem(id) {
    setItems((item) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  /// Clear all list function
  function handleClearItems() {
    const comfirmed = window.confirm(
      "Are you Sure You Want to delete All items ?"
    );
    if (comfirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
