import React, { Component } from "react";
import { currentUser } from "../../APIFunctions/user";

class ShopUser extends Component {
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
    <b>{this.state.user}'s Chip Balance:</b> 5000
      </div>
    );
  }
}
// would like to replace chip variable!
export default ShopUser;