import React, { useState, useEffect } from 'react'

export default function HookMouse () {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const logmousePosition = e => {
    console.log('mouse event called')
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    window.addEventListener('mousemove', logmousePosition)
    return () => {
      console.log('unmounting the code')
      window.removeEventListener('mousemove', logmousePosition)
    }
  }, [])
  return (
    <div>
      Hooks X- {x} Y - {y}
    </div>
  )
}
