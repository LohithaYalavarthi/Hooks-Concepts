import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Quotes from './Quotes'
import SecondComp from './renderData/SecondComp'
import CounterClassComp from './StateRelated/CounterClassComp'
import FunctionCount from './StateRelated/FunctionCount'
import HookCounterOne from './EffectRelated/HookCounterOne'
import MouseContainer from './EffectRelated/MouseContainer'
import IntervalHookCounter from './EffectRelated/IntervalHookCounter'
import DataFetching from './EffectRelated/DataFetching'
import AppMain from './ContextRelated/AppMain'

function App () {
  const [navigate, setNavigate] = useState(false)
  function navigateToOther () {
    setNavigate(true)
  }
  return (
    <>
      <AppMain />
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookCounterOne /> */}
      {/* <FunctionCount /> */}
      {/* <CounterClassComp /> */}
      {/* <SecondComp /> */}
      {navigate ? (
        <Quotes />
      ) : (
        <button onClick={navigateToOther}>Get Programming Quotes</button>
      )}
    </>
  )
}

export default App
