import { useState } from 'react'
const Counter = () => {
    let [counter, setCounter] = useState(0)
    const increaseHandler = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={increaseHandler}>Increase</button>
        </div>
    )
}
export default Counter
