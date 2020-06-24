import React from 'react'
import CounterContext from './NestCompt1'


function NestComp3() {
    const Countcontext = useContext(CounterContext)
    return (
        <div>
            Component B -{Countcontext.countState}
      Count value - {count2}
      <button onClick={() => Countcontext.countdispatch('increment')}>Increment</button>
      <button onClick={() => Countcontext.countdispatch('decrement')}>Decrement</button>
      <button onClick={() => Countcontext.countdispatch('reset')}>Reset</button>
        </div>
    )
}

export default NestComp3
