import React, { useState } from 'react'

export default function HookCounterTwo () {
  const initialCount = 0
  const [count, setcount] = useState(initialCount)
  const incrementFive = () => {
    for (let i = 0; i <= 5; i++) {
      setcount(prevCount => prevCount + 1)
    }
  }
  return (
    <>
      <div> Count : {count}</div>
      <button onClick={() => setcount(initialCount)}>Reset</button>
      <button onClick={() => setcount(prevcount => prevcount + 1)}>
        Increment
      </button>
      <button onClick={() => setcount(prevcount => prevcount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>incrementFive</button>
    </>
  )
}
