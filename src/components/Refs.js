import React, { Component } from 'react'

class Refs extends Component {

    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      
    }


    componentDidMount=()=>{
        console.log(this.inputRef);
        this.inputRef.current.focus()
    }

    abc = ()=>{
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
          <input type="text" ref={this.inputRef} />
          <button onClick={this.abc}>get alert</button>
      </div>
    )
  }
}

export default Refs