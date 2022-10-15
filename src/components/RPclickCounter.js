import React, { Component } from 'react'

class RPclickCounter extends Component {

    

  render() {
      const {count, incrementCount} = this.props
    return (
    <button onClick={incrementCount}>clicked {count} times</button>
    )
  }
}

export default RPclickCounter