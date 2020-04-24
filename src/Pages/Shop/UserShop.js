import React, { Component } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { currentUser, getCredit } from "../../APIFunctions/user";
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { currentUser } from "../../APIFunctions/user";
=======
import { currentUser, getCredit } from "../../APIFunctions/user";
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
import { currentUser, getCredit } from "../../APIFunctions/user";
>>>>>>> aad27cd... Fix css on pages and small additions (#40)
>>>>>>> ade4b8a... Fix css on pages and small additions (#40)
=======
import { currentUser, getCredit } from "../../APIFunctions/user";
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943

class ShopUser extends Component {
  state = {
    user: "",
  };
  componentDidMount() {
    this.setState({
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      user: currentUser()
=======
=======
>>>>>>> aad27cd... Fix css on pages and small additions (#40)
>>>>>>> ade4b8a... Fix css on pages and small additions (#40)
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
      user: currentUser(),
      credit: 0
    })
    getCredit(currentUser(), result => {
      console.log(result)
      this.setState({
        credit: result[0].no_of_chips
      })
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
>>>>>>> aad27cd... Fix css on pages and small additions (#40)
>>>>>>> ade4b8a... Fix css on pages and small additions (#40)
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
    })
  }
  render() {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div id="shop-balance">
        <h6><b>{this.state.user}'s Chip Balance:</b> {this.state.credit}</h6>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div>
    <b>{this.state.user}'s Chip Balance:</b> 5000
=======
      <div id="shop-balance">
        <h6><b>{this.state.user}'s Chip Balance:</b> {this.state.credit}</h6>
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
      <div id="shop-balance">
        <h6><b>{this.state.user}'s Chip Balance:</b> {this.state.credit}</h6>
>>>>>>> aad27cd... Fix css on pages and small additions (#40)
>>>>>>> ade4b8a... Fix css on pages and small additions (#40)
=======
      <div id="shop-balance">
        <h6><b>{this.state.user}'s Chip Balance:</b> {this.state.credit}</h6>
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
      </div>
    );
  }
}
// would like to replace chip variable!
export default ShopUser;