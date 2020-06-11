import React, { Component } from 'react'

export default class FirstComp extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      x: 'Hello x',
      y: 'Hello y'
    }
  }
  render () {
    return this.props.children(this.state)
  }
}
