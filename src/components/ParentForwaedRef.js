import React, { Component } from 'react'
import ChildForwardRef from './ChildForwardRef';

export class ParentForwaedRef extends Component {


    constructor(props) {
      super(props)
        this.inputRef = React.createRef();
  
    }

    abc = () =>{
        this.inputRef.current.focus();
    }

  render() {
    return (
      <div>
          <ChildForwardRef ref = {this.inputRef} />
          <button onClick={this.abc}>Focus Input</button>
      </div>
    )
  }
}

export default ParentForwaedRef