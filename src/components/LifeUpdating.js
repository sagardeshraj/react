import React, { Component } from 'react'

class LifeUpdating extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    static getDerivedStateFromProps = (props,state) =>{   // first
        console.log('getDerivedStateFromProps' ,props,state)
        return null
    }

    shouldComponentUpdate = (nextProp, nextState)=>{      // second
        console.log('shouldComponentUpdate', nextProp, nextState );

        // it'll reflect changing state in the console but not ui cos by default returns false if declared------
        if(this.state.count>5 && this.state.count < 10){
            return true
        }
        return false
    }


    getSnapshotBeforeUpdate = (prevProps,prevState)=>{            // forth
        console.log('getSnapshotBeforeUpdate', prevProps,prevState)
        return 'xxx'

    }

    // runs after everytime state updates after------changing state will get into infine loop without condition---
    // if we return false in 'shouldComponentUpdate' then 'render' and this method id completely halted to run------
    componentDidUpdate =(prevProps,prevState, snapShot)=>{              // fifth
        console.log(prevProps, prevState, this.state.count, 'componentDidUpdate');
        if(prevProps.count===this.state.count){
            alert(snapShot);
        }

    }
// third 
  render() {        // never update state in render bcos it runs everytime and can be fix into loops 
    console.log('render', this.state.count);
    return (
      <div>
          <h3>count - {this.state.count}</h3>
          <button onClick={()=>{this.setState({count:this.state.count+1})}}>count up</button>
      </div>
    )
  }
}

export default LifeUpdating