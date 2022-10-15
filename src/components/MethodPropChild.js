import React, { Component } from 'react'

class MethodPropChild extends Component {

   

  render() {
    return (
      <div>
          <h3>{this.props.xyz}</h3>
          <button onClick={()=>this.props.abc('sagar deshraj')}>change name</button>
      </div>
    )
  }
}

export default MethodPropChild