import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

// if-else -----------------------

    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h3>welcome sagar</h3>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h3>welcome guest</h3>
    //     </div>
    //   )
    // }
    //   }

// terniary operator-------------------------                  // in the jsx

    // return this.state.isLoggedIn ? (
    //   <div>welcome sagar</div>
    // ) : (
    //   <div>welcome guest</div>
    // );

    // short-cercuit operator-----------------if something or nothing

    return this.state.isLoggedIn && <div>welcome sagar</div>   // in the jsx
    
  }
}
export default ConditionalRendering;
