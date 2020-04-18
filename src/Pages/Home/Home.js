import React, { Component } from "react";
import { currentUser } from "../../APIFunctions/user";

class Home extends Component {
  state = {
    user: "",
  };
  componentDidMount() {
    this.setState({
      user: currentUser()
    })
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.user}</h1>
      </div>
    );
  }
}

export default Home;
