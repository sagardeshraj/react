import React, { Component } from 'react'
import MethodPropChild from './MethodPropChild'

class MethodProp extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           name : "welcome"
        }
      }


    abc = (name)=>{
        this.setState({
            name:name
        })
    }

  render() {
    return (
      <div>
          <MethodPropChild abc={this.abc} xyz={this.state.name}/>
      </div>
    )
  }
}

export default MethodProp