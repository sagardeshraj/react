import React, { Component } from "react";

// we cant use useRef with class so it s just a sumulation what we r going to do----

class UseRefWithClass extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1
      }));
    }, 1000);
  }

  componentWillUnmount(){
      clearInterval(this.interval)
  }

  render() {
    return (
        <div>
            <h3>class timer - {this.state.timer}</h3>
            <button onClick={()=> clearInterval(this.interval) }>clear timer</button>
        </div>
    )
  }
}

export default UseRefWithClass;
