import React, { Component } from "react";

export class StateClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log(`callback value ${this.state.count}`);          // callbace function
    //   }
    // );
    // console.log(`synchronous - value - ${this.state.count}`);       // synchronouus

    // we get the increased output howmany times the setState runs with previous state else all setState are asynchrounous
    // and every time runs get increased value from the initial one (may be 0);

    this.setState((prevState, props) => ({
      count : prevState.count + 1           // if dependant on props as well use **prevState.count + props.something()**
    }));
    console.log(`asynch ${this.state.count}`);
  };

  incrementCountFive = () => {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  };

  render() {
    return (
      <div>
        <h1>count-{this.state.count}</h1>
        <button onClick={() => this.incrementCountFive()}>
          incrementCount
        </button>
      </div>
    );
  }
}

export default StateClass;
