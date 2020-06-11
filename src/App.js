import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Quotes from './Quotes'
import SecondComp from './renderData/SecondComp'
import CounterClassComp from './StateRelated/CounterClassComp'
import FunctionCount from './StateRelated/FunctionCount'

function App () {
  const [navigate, setNavigate] = useState(false)
  function navigateToOther () {
    setNavigate(true)
  }
  return (
    <>
      <FunctionCount />
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
