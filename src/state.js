import React, { useState } from 'react';

function State() {
  //init State
  const [counter, setCounter] = useState(999);

  const [name, setName] = useState('Ilham');

  //Create Function Add
  function Add() {
    setCounter(counter + 1);
  }

  //Create Function Less
  function Less() {
    const newCounter = counter - 1;
    setCounter(newCounter);
  }

  function ChangeName() {
    setName('Braja');
  }

  return (
    // Code Inside div
    <div>
      <p>
        If you click the add button it will increase by one, vice versa if you
        click the less button it will descrease by one
      </p>

      <h2>{counter}</h2>

      <button onClick={Add}>Add</button>
      <button onClick={Less}>Less</button>

      <h1>{name}</h1>
      <button onClick={ChangeName}>Change name to 'Braja'</button>
    </div>
  );
}

export default State;
