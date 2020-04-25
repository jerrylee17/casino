import React, { Component } from "react";
import { currentUser, getCredit } from "../../APIFunctions/user";

class ShopUser extends Component {
  state = {
    user: "",
  };
  componentDidMount() {
    this.setState({
      user: currentUser(),
      credit: 0
    })
    getCredit(currentUser(), result => {
      this.setState({
        credit: result[0].no_of_chips
      })
    })
  }
  render() {
    return (
      <div id="shop-balance">
        <h6><b>{this.state.user}'s Chip Balance:</b> {this.state.credit}</h6>
      </div>
    );
  }
}
// would like to replace chip variable!
export default ShopUser;