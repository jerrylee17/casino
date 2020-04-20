import React, { Component } from "react";
import { currentUser, dailyReward, updateLogin, updateCredit } from "../../APIFunctions/user";

class Home extends Component {
  state = {
    user: "",
  };
  componentDidMount() {
    this.setState({
      user: currentUser(),
      dailyReward: false
    })
    dailyReward(result => {
      let lastLogin = result[0].last_login;
      let checkLogin = new Date(new Date(lastLogin).getTime() + 60 * 60 * 24 * 1000).toJSON(); // lastLogin + 24hours
      let currentLogin = new Date().toJSON();
      // eligible for daily reward if equal to or more than 24 hours
      if (currentLogin >= checkLogin) {
        this.setState({ dailyReward: true });
        updateLogin(); // updates last login date
        updateCredit(500); // updates user's credit
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.user}</h1>
        {this.state.dailyReward ? (<p>You have received your daily reward! +500 chips</p>) : <></>}
      </div>
    );
  }
}

export default Home;
