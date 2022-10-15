import React, { Component } from 'react'
import Hoc from './Hoc'

class HoverCounter extends Component {

  render() {  
      const {count, increamentCount } = this.props
    return (
      <div>
          <h2 onMouseOver={increamentCount}>hovered {count} times</h2>
      </div>
    )
  }
}

export default Hoc(HoverCounter,5)