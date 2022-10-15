import React, { Component } from 'react'
import ChildRefToClass from './ChildRefToClass'

class ParentRefToClass extends Component {


    constructor(props) {
      super(props)
        this.compomentRef = React.createRef()
    }

    clickHandler = () =>{
        // console.log(this.compomentRef);
        this.compomentRef.current.focusInput();  // method from child component
    }

  render() {
    return (
      <div>
          <ChildRefToClass ref={this.compomentRef} />            {/* it must be class comp. */}
          <button onClick={this.clickHandler}>Focus</button>
      </div>
    )
  }
}

export default ParentRefToClass