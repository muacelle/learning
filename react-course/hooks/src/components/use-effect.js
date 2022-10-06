import React, { useEffect, useState } from "react";
import axios from "axios";

// useEffect is just a function that will be called whenever the page rerenders.

function Effect() {

    const [data, setData] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            setData(response.data[0].email)
            console.log('API was called!')
        })
    }, [count])             // empty array = states shouldn't trigger useEffect

    return (
        <div>
            <h1>Email: {data}</h1>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click</button>
        </div>
    )
}

export default Effect