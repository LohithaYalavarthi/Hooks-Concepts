import React, { useState, useEffect, useRef } from 'react'

function HookTimer () {
  const [timer, settimer] = useState(0)
  const intervalref = useRef(null)
  useEffect(() => {
    intervalref.current = setInterval(() => {
      settimer(prevTimer => prevTimer + 1)
    }, 1000)
    return () => {
      clearInterval(intervalref.current)
    }
  }, [])
  console.log('intervalref', intervalref.current)
  return (
    <>
      <div>Class timer - {timer}</div>
      <button onClick={() => clearInterval(intervalref.current)}>
        Clear Hook Timer
      </button>
    </>
  )
}

export default HookTimer
