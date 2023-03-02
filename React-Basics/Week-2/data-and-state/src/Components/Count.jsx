import React, {useState} from "react";

function Counter(){
    // Declaring State Variable
    const [counter, setCounter] = useState(false);

    return (
        <div>
            <h1>
                Counter Example Through Use State Hook
            </h1>
            <h2>Counter: {counter}</h2>
            <button onClick={()=> setCounter(counter
                 + 1)}>Count</button>
                 <span> </span>
                <button onClick={()=> setCounter(counter
                 * 0)}>Reset</button>
        </div>
    );
}
export default Counter;