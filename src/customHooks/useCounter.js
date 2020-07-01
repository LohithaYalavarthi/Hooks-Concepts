import React from 'react'

function useCounter () {
  const [count, setcount] = useState(0)
  const increment = () => {
    setcount(prevcount => prevcount + 1)
  }
  const increment = () => {
    setcount(prevcount => prevcount - 1)
  }
  const reset = () => {
    setcount(0)
  }
  return [count, increment, decrement, reset]
}

export default useCounter
