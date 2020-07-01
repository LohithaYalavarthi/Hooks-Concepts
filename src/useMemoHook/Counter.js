import React, { useState, useMemo } from 'react'

function Counter () {
  const [counterOne, setcounterOne] = useState(0)
  const [counterTwo, setcounterTwo] = useState(0)
  const incrementOne = () => {
    setcounterOne(counterOne + 1)
  }
  const incrementTwo = () => {
    setcounterTwo(counterTwo + 1)
  }

  const isEven = useMemo(() => {
    return counterTwo % 2 === 0
  }, [counterOne])
  return (
    <div>
      <button onClick={incrementOne}>Count one- Counter {counterOne} </button>
      <span>{isEven ? 'Even' : 'Odd'} </span>
      <button onClick={incrementTwo}>Count two- Counter {counterTwo} </button>
    </div>
  )
}

export default Counter
