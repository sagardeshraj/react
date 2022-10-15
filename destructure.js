import React, { Component } from 'react'

class destructure extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         state1:null,
         state2:null
      }
    }

  render() {

        // in class component we destructure the props in render--
        const {props1 , props2} = this.props;
        
        // destructuring the state--
        cosnt {state1, state2} = this.state;

    
        return (
      <div>
            welcome {props1} aka {props2} here.
      </div>
    )
  }
}

export default destructure;

// in functional Component--------------------------------------------------

import React from 'react'

function destructure(props) {
// function destructure({p1, p2}) {     in function perameter or in the body--
const {p1,p2} = props;
  

        return (
            <div>
                hello {p1} aka {p2} there.
            </div>
        )
}

export default destructure;

