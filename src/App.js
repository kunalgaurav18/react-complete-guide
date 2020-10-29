import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import ValidationComponent from "./component/ValidationComponent";
import CharComponent from "./component/CharComponent";

const App = (props) => {
  const [personState, setPersonState] = useState({
    person: [
      { name: "Kunal", age: 28 },
      { name: "Sonu", age: 28 },
    ],
  });

  const [inputState, inputStateChange] = useState({
    input: "",
  });

  const switchNameHandler = () => {
    setPersonState({
      person: [
        { name: "Kunal Gaurav", age: 28 },
        { name: "Sonu Kumar", age: 28 },
      ],
    });
  };

  const inputChangeHandler = (event) => {
    inputStateChange({ input: event.target.value });
  };

  const deleteCharacter = (index) => {
    let newtext = inputState.input.split("");
    newtext.splice(index, 1);
    newtext = newtext.join("");
    inputStateChange({ input: newtext });
  };

  return (
    <div className="App">
      <h1>This is react guide.</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.person[0].name}
        age={personState.person[0].age}
      />
      <Person name={personState.person[1].name} age={personState.person[1].age}>
        It has a child component also.
      </Person>
      <input
        type="text"
        value={inputState.input}
        onChange={(event) => inputChangeHandler(event)}
      />
      <p>{inputState.input.length > 0 ? inputState.input.length : null}</p>
      <ValidationComponent totalChars={inputState.input.length} />
      <CharComponent text={inputState.input} delete={deleteCharacter} />
    </div>
  );
};

export default App;
