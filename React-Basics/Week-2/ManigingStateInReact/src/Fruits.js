import React from "react";

function Fruits(props) {


    return (
        <div>
            {props.fruitList.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits