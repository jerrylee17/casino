import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import $ from "jquery";
import { loginUser } from "../../APIFunctions/user";
import "./login.css";

class LoginModal extends Component {
  state = {
    usernameError: false,
    passwordError: false
  };
  render() {
    // Function listens to login form and logs in if user is valid
    let handleLogin = (e) => {
      e.preventDefault();
      this.setState({
        usernameError: false,
        passwordError: false
      })
      let data = $("#login-form").serializeArray();
      let username = data[0].value;
      let password = data[1].value;
      loginUser(username, password, result => {
        if (result === 'passwordError') this.setState({ passwordError: true });
        else if (result === 'usernameError') this.setState({ usernameError: true });
      });
    };

    return (
      <Modal
        isOpen={this.props.showSignIn}
        toggle={this.props.toggleSignInModal}
        id="login-modal"
      >
        <Form id="login-form" onSubmit={handleLogin}>
          <ModalHeader toggle={this.props.toggle}>Login</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="Enter Username"
                name="username"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />
            </FormGroup>
            {this.state.usernameError ? <p>User not found!</p> : <></>}
            {this.state.passwordError ? <p>Password incorrect!</p> : <></>}
          </ModalBody>
          <ModalFooter>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}
export default LoginModal;
