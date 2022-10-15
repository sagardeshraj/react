import React, { Component } from "react";

class GetDFS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doubleCount: 10,
    };
  }


  static getDerivedStateFromProps = (props, state) => {
    console.log(state);
    // return null 
    return {                                    // needed
        doubleCount: props.count * 2            // this keyword doesn't work in static method                
    }

  };

  componentDidMount(){
    //   console.log('cmdidm');                // on run once on mounting / no effect of state and props
  }

  render() {
    
    return (
      <div>
        <h6>Doubled : {this.state.doubleCount}</h6>
      </div>
    );
  }
}

export default GetDFS;
