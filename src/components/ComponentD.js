import React, { Component } from 'react'
import ComponentE from './ComponentE'
import { UserContext } from './UserContext'

class ComponentD extends Component {
  render() {
    return (
      <div>
          <h3>componentD here and provided value is {this.context} </h3>
          <ComponentE />
      </div>
    )
  }
}

ComponentD.contextType = UserContext;       // only works in class component and can be used only once

export default ComponentD    