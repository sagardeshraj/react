import React, { Component } from 'react'
import Hoc from './Hoc'

class ClickCounter extends Component {  

   
  render() {
      const {count , increamentCount} = this.props
    return (
      <>
       <button onClick={increamentCount}>clicked {count} times</button>   
      </>
    )
  }
}

export default Hoc(ClickCounter, 10)