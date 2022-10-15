import React, { Component } from 'react'
import GetDFS from './GetDFS'

class LifeMounting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
   
    static getDerivedStateFromProps(props, state){        // runs first  
      return {
        count: state.count*props.x 
      }
    }

    render() {
    return (
      <div>
          <h3>Count Value {this.state.count}</h3>
            <GetDFS count = {this.state.count} />
          <button onClick={()=>{this.setState({count:this.state.count+1})}}>make ++</button>
      </div>
    )
  }
}

export default LifeMounting