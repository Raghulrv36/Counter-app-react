import { useState } from "react"

function Counter()
{
    var [count,setCount] = useState(0)

    function increment()
    { 
        setCount(count+1)
    }

    function decrement()
    {
        setCount(count-1)
    }

    return(
        <div className="container">
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter