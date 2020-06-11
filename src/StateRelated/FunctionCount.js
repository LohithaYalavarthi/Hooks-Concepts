import React, { useState } from 'react'

export default function FunctionCount () {
  const [count, setstate] = useState(0)
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setstate(count + 1)}>Increment</button>
      <button onClick={() => setstate(count - 1)}>Decrement</button>
    </>
  )
}
