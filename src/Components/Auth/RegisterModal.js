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
  ModalFooter,
} from "reactstrap";
import $ from "jquery";
import "./register.css";

class RegisterModal extends Component {
  state = {
    passwordEqual: true,
    passwordLength: true,
    usernameError: false,
    emailError: false
  };
  render() {
    // checks if both the passwords are the same
    let validatePassword = (p1, p2) => {
      if (p1.length < 6 || p2.length < 6) {
        this.setState({
          passwordLength: false,
        });
        return false;
      }
      if (p1 !== p2) {
        this.setState({
          passwordEqual: false,
        });
        return false;
      }
      return true;
    };

    // Function listens to register form and signs up a user
    let handleRegister = (e) => {
      e.preventDefault();
      this.setState({
        passwordEqual: true,
        passwordLength: true,
        usernameError: false,
        emailError: false
      });
      let data = $("#register-form").serializeArray();
      // If both passwords are valid and equal... then sign up
      if (validatePassword(data[2].value, data[3].value)) {
        let username = data[0].value;
        let email = data[1].value;
        let password = data[2].value;
        $.post(
          "http://localhost:5000/api/register",
          {
            username: username,
            email: email,
            password: password,
          },
          (data) => {
            console.log(data);
          }
        ).then((result) => {
          if (result.token) {
            localStorage.setItem("jwt", result.token);
            localStorage.setItem("jwt-expire", Date.now() + 2 * 60 * 60 * 1000);
            window.location.reload(false);
          }
          else if (result.usernameError) {
            this.setState({
              usernameError: true
            });
          }
          else if (result.emailError) {
            this.setState({
              emailError: true
            });
          }
        });
      }
    };
    return (
      <Modal
        isOpen={this.props.showSignUp}
        toggle={this.props.toggleSignUpModal}
        id="register-modal"
      >
        <Form id="register-form" onSubmit={handleRegister}>
          <ModalHeader toggle={this.props.toggle}>Register</ModalHeader>
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
              <Label>Email address</Label>
              <Input
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />
              <FormText className="text-muted">
                We'll never share your email with anyone else.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />
              {this.state.passwordEqual ? (
                ""
              ) : (
                  <small className="password-error">
                    Passwords do not match.{" "}
                  </small>
                )}
              {this.state.passwordLength ? (
                ""
              ) : (
                  <small className="password-error">
                    Passwords must be at least 6 characters.{" "}
                  </small>
                )}
            </FormGroup>
            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                placeholder="Confirm Password"
                name="confirm"
                required
              />
              {this.state.passwordEqual ? (
                ""
              ) : (
                  <small className="password-error">
                    Passwords do not match.{" "}
                  </small>
                )}
              {this.state.passwordLength ? (
                ""
              ) : (
                  <small className="password-error">
                    Passwords must be at least 6 characters.{" "}
                  </small>
                )}
            </FormGroup>
            {this.state.usernameError ? <p>Username already exists!</p> : <></>}
            {this.state.emailError ? <p>Email already exists!</p> : <></>}
          </ModalBody>
          <ModalFooter>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}
export default RegisterModal;
