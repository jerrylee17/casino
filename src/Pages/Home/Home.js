import React, { Component } from "react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { currentUser, dailyReward, updateLogin, updateCredit } from "../../APIFunctions/user";
=======
>>>>>>> 71815a5... Refactor code to categorize images better (#48)
import {
  Jumbotron, Container, Row, Col
} from "reactstrap";
import { currentUser, dailyReward, updateLogin, updateCredit } from "../../APIFunctions/user";
import "./home.css";
<<<<<<< HEAD
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
import {
  Jumbotron
} from "reactstrap";
import { currentUser, dailyReward, updateLogin, updateCredit } from "../../APIFunctions/user";
import "./home.css";
>>>>>>> 838d2b4... Refactor code to categorize images better (#48)
>>>>>>> 71815a5... Refactor code to categorize images better (#48)

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
<<<<<<< HEAD
        updateCredit(this.state.user, 500); // updates user's credit
=======
<<<<<<< HEAD
<<<<<<< HEAD
        updateCredit(500); // updates user's credit
=======
        updateCredit(this.state.user, 500); // updates user's credit
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
        updateCredit(this.state.user, 500); // updates user's credit
>>>>>>> aad27cd... Fix css on pages and small additions (#40)
>>>>>>> ade4b8a... Fix css on pages and small additions (#40)
      }
    })
  }
  render() {
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div>
=======
      <div id="home-page">
        <Jumbotron>
          <div className='text-center'>
            <h1 className='display-4'>Home</h1>
          </div>
        </Jumbotron>
>>>>>>> 838d2b4... Refactor code to categorize images better (#48)
        <h1>Hello {this.state.user}</h1>
=======
>>>>>>> 71815a5... Refactor code to categorize images better (#48)
      <div id="home-page">
        <Jumbotron>
          <div className='text-center'>
            <h1 className='display-4'>Blips - Home</h1>
          </div>
        </Jumbotron>
        <Container>
          <h1>A home to online gambling</h1>
          <Row>
            <h2>Games</h2>
          </Row>
          <Row>
            <h2>Shop</h2>
          </Row>
        
        </Container>
        {this.state.dailyReward ? (<p>You have received your daily reward! +500 chips</p>) : <></>}
      </div>
    );
  }
}

export default Home;
