import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleCommentsChange = (e) => {
    this.setState({ comments: e.target.value });
  };

  handleTopicChange = (e) => {
    this.setState({ topic: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `username : ${this.state.username}, comments : ${this.state.comments}, topic : ${this.state.topic}`
    );
  };

  render() {
    const { username, topic, comments } = this.state;
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Username</label>
            <input
              type="text"
              value={this.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="">Comments</label>
            <textarea
              type="text"
              value={this.comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Topic</label>
            <select
              name=""
              id=""
              value={this.topic}
              onChange={this.handleTopicChange}
            >
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
