import { useState } from 'react';

export default function InputComponent() { 
  const [inputText, setText] = useState('hello'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 
    
  const [newInput, setNewText] = useState("new Text");

  function handleNewChange(e) {
        setNewText(e.target.value);
    }
  return ( 
    <> 
      <div>
        <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
      </div>
      <div>
        <h1>New Input Field</h1>
        <input value={newInput} onChange={handleNewChange}/>
        <p>typing: {newInput}</p>
        <button onClick={()=> setNewText('Enter Someting')}>Clear Text</button>
      </div>
    </> 
  ); 
} 