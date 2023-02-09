import React, { useState } from "react";
import "./App.css";

function App() {
  const [textValue, setText] = useState("");
  const [inputDirty, setInputDirty] = useState(false);
  const [added, setAdded] = useState("");

  const errorInput = "Поле ввода не должно быть пустым";

  const hendleInput = (e) => {
    setText(e.target.value);
    e.target.value && setInputDirty(false);
    setAdded("");
  };

  const blurHandel = (e) => {
    if (textValue === "") {
      setAdded("");
      setInputDirty(true);
    }
  };
  
  const addText = () => {
    console.log(textValue);
    setText("");
    setAdded("Сообщение успешно отправлено");
  };

  return (
    <div className="App">
      <div className="dddd">
        <input
          className={inputDirty ? "input-error" : "input"}
          type="text"
          placeholder="Введите текст"
          value={textValue}
          onChange={(e) => hendleInput(e)}
          onBlur={(e) => blurHandel(e)}
          name="input"
        />
        <button className="btn" disabled={!textValue} onClick={() => addText()}>
          Отправить
        </button>
      </div>
      {inputDirty && <div style={{ color: "red" }}>{errorInput}</div>}
      <div style={{ color: "green" }}>{added}</div>
    </div>
  );
}

export default App;
