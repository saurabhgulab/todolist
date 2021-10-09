import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [item, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }
  function addItems() {
    setItems((prevValue) => {
      return [...prevValue, input];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todo) => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
