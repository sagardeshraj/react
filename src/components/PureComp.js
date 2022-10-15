// rpce
import React, { PureComponent } from 'react'


// we can create a pure component by extending the PureComponent class--
// a pure component inplements the shouldcomponentupdate life cycle method by performing a shallow comparison on the 
// props ans the states of the component ---
// if there is no difference , the compoent it not re-renderd --performance boost----
// it is a good idea to ensure that all the Children component are also pure to avoid unexpected behaviours---
// never mutate the state. always return a new object that reflects the new state---


class PureComp extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    abc = ()=>{
        this.setState({count:1})        // no updating the state ...it'll stop rendering----
    }     

  render() {
      console.log('render');
    return (
      <div>
          <h3>pure component</h3>
          <h4>{this.state.count}</h4>
          <button onClick={this.abc}>++</button>
      </div>
    )
  }
}

export default PureComp

