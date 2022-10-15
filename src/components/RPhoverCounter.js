import React, { Component } from 'react'

class RPhoverCounter extends Component {

    

  render() {
      const {count, incrementCount} = this.props
    return (
    <h3 onMouseOver={incrementCount}>hovered {count} times</h3>
    )
  }
}  

export default RPhoverCounter