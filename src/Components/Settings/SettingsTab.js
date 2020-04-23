import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import './settings-tab.css';
import { currentUser, currentUserEmail, changeUser } from '../../APIFunctions/user';

class SettingsTab extends Component {
    state = {
        changePassword: false,
        username: currentUser(),
        newUsername: '',
        email: currentUserEmail(),
        newEmail: '',
        password: '',
        newPassword: '',
        passwordError: false,
        usernameError: false,
        emailError: false
    }

    handleChangePassword = () => { this.setState({ changePassword: true }) }
    handleUsername = (event) => { this.setState({ newUsername: event.target.value }) }
    handleEmail = (event) => { this.setState({ newEmail: event.target.value }) }
    handleNewPassword = (event) => { this.setState({ newPassword: event.target.value }) }
    handlePassword = (event) => { this.setState({ password: event.target.value }) }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const userInfo = {
            username: this.state.username,
            newUsername: this.state.newUsername,
            email: this.state.email,
            newEmail: this.state.newEmail,
            password: this.state.password,
            newPassword: this.state.newPassword
        }
        changeUser(userInfo, result => {
            if (result === "passwordError") this.setState({ passwordError: true });
            else if (result === "usernameError") this.setState({ usernameError: true });
            else if (result === "emailError") this.setState({ emailError: true });
        });
    };
    render() {
        return (
            <div id="settings-tab" >
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Username<span className="submit-asterik">*</span></Label>
                        <Input type="text" name="username" value={this.state.newUser} onChange={event => { this.handleUsername(event) }} required></Input>
                        {this.state.usernameError ? <p>Username already exists!</p> : <></>}
                    </FormGroup>
                    <FormGroup>
                        <Label>Email<span className="submit-asterik">*</span></Label>
                        <Input type="email" name="email" value={this.state.newEmail} onChange={event => { this.handleEmail(event) }} required></Input>
                        {this.state.emailError ? <p>Email already exists!</p> : <></>}
                    </FormGroup>
                    <FormGroup>
                        <Label>Current Password<span className="submit-asterik">*</span></Label>
                        <Input type="password" name="password" value={this.state.password} onChange={event => { this.handlePassword(event) }} required></Input>
                        {this.state.passwordError ? <p>Incorrect password</p> : <></>}
                    </FormGroup>
                    {this.state.changePassword ?
                        (<FormGroup>
                            <Label>New Password</Label>
                            <Input type="password" name="newPassword" value={this.state.newPassword} onChange={event => { this.handleNewPassword(event) }} required></Input>
                        </FormGroup>) :
                        (<FormGroup><Button color="link" onClick={this.handleChangePassword}>Change Password?</Button></FormGroup>)}
                    <Button outline id="submit-btn" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SettingsTab;