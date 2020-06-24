import React, { useReducer } from 'react'

const initialState = 0
const reducerFunc = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
export default function MultipleReducers () {
  const [count, dispatch] = useReducer(reducerFunc, initialState)
  const [count2, dispatch2] = useReducer(reducerFunc, initialState)

  return (
    <div>
      Count value - {count}
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      Count value - {count2}
      <button onClick={() => dispatch2('increment')}>Increment</button>
      <button onClick={() => dispatch2('decrement')}>Decrement</button>
      <button onClick={() => dispatch2('reset')}>Reset</button>
    </div>
  )
}
