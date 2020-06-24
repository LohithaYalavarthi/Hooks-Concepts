import React, { useReducer } from 'react'

const initialState = {
  firstCounterSet: 0,
  secondCounter: 10
}
const reducerFunc = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounterSet: state.firstCounterSet + action.value }
    case 'decrement':
      return { ...state, firstCounterSet: state.firstCounterSet - action.value }
    case 'increment2':
      return {
        ...state,
        secondCounter: state.secondCounter + action.value
      }
    case 'decrement2':
      return {
        ...state,
        secondCounter: state.secondCounter - action.value
      }
    case 'reset':
      return initialState
    default:
      return state
  }
}
export default function StateObjects () {
  const [count, dispatch] = useReducer(reducerFunc, initialState)
  return (
    <div>
      Count value - {count.firstCounterSet}
      secondCounter value = {count.secondCounter}
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: 'increment2', value: 2 })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 2 })}>
        Decrement 2
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}
