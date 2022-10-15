// import React from "react";

// const Event = () => {
//   function aleatEvent() {
//     alert('aleatEvent');
// }

//   return (
//     <div>
//       <button onClick={()=>aleatEvent()}>fire event</button>
//       <button onClick={aleatEvent}>fire event</button>
//     </div>
//   );
// }

// export default Event;

// in class component-----------------------------------------------------------------

import React, { Component } from 'react'

export class Event extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         name:'hi'
      }
    }


  // needed binding-------------------------------

    // alertEvent() {                         // **function keyword removed in class-based
    //     this.setState({
    //         name: 'sagar'
    //     })

    // }


    // no binding needed----------------------------------------------
    
    alertEvent = ()=> {                      // const removed in claas-based 

        this.setState({
            name: 'sagar'
        })

        console.log(this);
    }

  render() {
    return (
      <div>
          <h1>{this.state.name}</h1>
          <button onClick={this.alertEvent}>fire event</button>
          {/* <button onClick={this.alertEvent}>fire event</button> */}

      </div>
    )
  }
}

export default Event