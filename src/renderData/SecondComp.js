import React, { Component } from 'react'
import FirstComp from './FirstComp'

export default class SecondComp extends Component {
  render () {
    return (
      <>
        <FirstComp>
          {mouse => (
            <p>
              The mouse position is {mouse.x}, {mouse.y}
            </p>
          )}
        </FirstComp>
      </>
    )
  }
}
