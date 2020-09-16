import { useState } from 'react'

import React from 'react'

function PracticeHooks () {
  const [recentflower, setrecentflower] = useState('')
  const buyFlowers = value => {
    const listFlowers = ['Rose', 'Jasmine', '']
    setrecentflower(listFlowers[value])
  }
  return (
    <>
      <div>{recentflower}</div>
      <button onClick={() => buyFlowers(1)}>1</button>
      <button onClick={() => buyFlowers(2)}>2</button>
      <button onClick={() => buyFlowers(3)}>3</button>
    </>
  )
}

export default PracticeHooks
