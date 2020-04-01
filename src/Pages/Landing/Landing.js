import React, { Component } from "react";
import { Row } from "reactstrap";
import "./landing.css";
import icon from "../../Images/icon-white.png";
import LoginModal from "../../Components/Auth/LoginModal";
import RegisterModal from "../../Components/Auth/RegisterModal";

class Landing extends Component {
  state = {
    showSignIn: false,
    showSignUp: false
  };

  render() {
    const toggleSignInModal = () => {
      this.setState({
        showSignIn: !this.state.showSignIn
      });
      console.log(this.state.showSignIn);
    };
    const toggleSignUpModal = () => {
      this.setState({
        showSignUp: !this.state.showSignUp
      });
    };
    return (
      <div id="landing-page">
        <div id="landing-items">
          <Row id="landing-icon">
            <img src={icon} height="300" alt="" />
          </Row>
          <Row>
            <h2>Welcome to Blips</h2>
          </Row>
          <Row>
            <button className="landing-btn" onClick={toggleSignInModal}>
              Login
            </button>
            <button className="landing-btn" onClick={toggleSignUpModal}>
              Register
            </button>
          </Row>
        </div>
        <LoginModal
          showSignIn={this.state.showSignIn}
          toggle={toggleSignInModal}
        />
        <RegisterModal
          showSignUp={this.state.showSignUp}
          toggle={toggleSignUpModal}
        />
      </div>
    );
  }
}

export default Landing;
