import React, { Component } from "react";

// hoc is a pattern, which takes a component as an input and return an enhanced component  

const Hoc = (OriginalComponent , incrementNumber) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {            // common code
        count: 0,
      };
    }

    increamentCount = () => {           //  common code
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementNumber,
        };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          increamentCount={this.increamentCount}
        //   {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default Hoc;





























