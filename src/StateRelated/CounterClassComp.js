import React, { Component } from 'react'

export default class CounterClassComp extends Component {
  constructor (props) {
    super(props)
    this.state = { count: 0 }
  }
  increaseCount = () => {
    this.setState(anything => ({
      count: anything.count + 1
    }))
  }
  decreaseCount = () => {
    this.setState(anything => ({
      count: anything.count - 1
    }))
  }
  render () {
    const { count } = this.state
    console.log('count :', count)
    return (
      <>
        {count}
        <button onClick={this.increaseCount}>Increase Count</button>
        <br />
        <button onClick={this.decreaseCount}>Decrease Count</button>
      </>
    )
  }
}
