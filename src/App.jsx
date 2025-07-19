import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function addNewItem(newItem) {
    setItems((oldItems) => [...oldItems, newItem]);
  }

  function deleteItem(id) {
    setItems((oldItems) => oldItems.filter((item) => item.id !== id));
  }

  function togglePacked(id, value) {
    setItems((oldItems) =>
      oldItems.map((item) =>
        item.id === id ? { ...item, packed: value } : item
      )
    );
  }

  function clearList() {
    const confirmed = window.confirm(
      "Você deseja deletar todos os itens da lista?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onSubmit={addNewItem} />
      <PackingList
        initialItems={items}
        onDelete={deleteItem}
        onUpdateItem={togglePacked}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
