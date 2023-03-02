import React, {useState} from 'react';
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {
    const [fruits, setFruits] = React.useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'apple', id: 2},
        {fruitName: 'plum', id: 3},
    ]);
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruitList = {fruits} />
      <FruitsCounter fruitList = {fruits}/>
    </div>
  );
}

export default App;
