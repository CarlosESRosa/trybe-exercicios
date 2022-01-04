import React, { Component } from 'react'
import './css/Button.css'

export default class Button extends Component {
  render() {
    const { element, myFunc } = this.props
    return (
      <div>
        <button className='elementButton' onClick={(event) => myFunc(event, element)}>{element}</button>
      </div >
    )
  }
}
