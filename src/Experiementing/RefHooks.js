import { useRef, useEffect, useState } from 'react'

import React from 'react'

function RefHooks () {
  const [count, setCount] = useState(0)
  const prevCountRef = useRef(null)
  const value = { current: '' }
  useEffect(() => {
    prevCountRef.current = count
    value.current = count
  })
  const incrementCount = () => {
    setCount(count + 1)
  }
  const prevCount = prevCountRef.current
  const Prevvalue = value.current
  return (
    <>
      <h1>
        Now, Count {count}, before {prevCount} prevalue {Prevvalue}
        {value.current}
      </h1>
      <button onClick={incrementCount}>ClickButton</button>
    </>
  )
}

export default RefHooks
