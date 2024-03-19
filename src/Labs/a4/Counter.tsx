import React, { useState } from "react";
function Counter() {
    //let count = 7;
    const [count, setcount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button className="btn btn-success"
                onClick={() => setcount(count + 1)}>
                Up
            </button>
            <button className="btn btn-danger ms-2"
                onClick={() => setcount(count - 1) }>
                Down
            </button>
        </div>
    );
}
export default Counter;