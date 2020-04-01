import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import $ from "jquery";
import "./login.css";

class LoginModal extends Component {
  render() {
    // Function listens to login form and logs in if user is valid
    let handleLogin = e => {
      e.preventDefault();
      let data = $("#login-form").serializeArray();
      let username = data[0].value;
      let password = data[1].value;
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
