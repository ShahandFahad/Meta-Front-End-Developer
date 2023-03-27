import { useState, useReducer } from "react";

// get previous state and return new state based on action
const reducer = (state, action) => {
   if(action.type === 'buy_ingridients') return { money: state.money - 10 };
    if (action.type === 'sell_a_meal') return { money: state.money + 10 };
    if (action.type === 'sell_a_drink') return { money: state.money + 5};

    return state;
}

export default function UseReducerHook() {
    const initialState = {money: 100};
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
    <div>
        <h1>Wallet: {state.money}</h1>
        <button onClick={() => dispatch({type: 'buy_ingridients'})}>Shopping for Veggies!: -10$</button>
        <button onClick={() => dispatch({type: 'sell_a_meal'})}>Serve a meal to the customer!: +10$</button>
        <button onClick={() => dispatch({type: 'sell_a_drink'})}>Serve drink to customer the customer!: +5$</button>
    </div>
    );
}