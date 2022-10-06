import React, { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const incriment = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            {counter}
            <button onClick={incriment}>Increment</button>
        </div>
    )
}

const Input = () => {

    const [inputValue, setInputValue] = useState('Something')

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue)
    }

    return (
        <div>
            <input placeholder="Enter something..." onChange={onChange}/> {inputValue}
        </div>
    )
}

export default Input;