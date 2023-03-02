import React, {useState, useRef} from "react";
export default function StateExample1() {
    const [word, setWord] = React.useState("Hello, World");
     const [date, setDate] = React.useState(new Date());
    const UserInput = useRef(null);
    const focus = ()=> {
        UserInput.current.focus();
    }


    function updateText(e){
        setWord(e.target.value);
    }
    

   

    return (
        <div>
            <h1>The Word is: {word}</h1>
            <input ref={UserInput} type="text"
            onChange={(e)=>{
                    setWord(e.target.value)
            }}
            />
            <button onClick={focus}>State Example Focus</button>
            <button onClick={()=>{
                setWord("Enter Something... ")
            }}>
                Clear
            </button>

            <h1>Date: {date.getFullYear()}</h1>
        </div>
    );
}