import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import './settings-tab.css';
import $ from "jquery";
import { currentUser, currentUserEmail, changeUser } from '../../APIFunctions/user';

class SettingsTab extends Component {
    state = {
        changePassword: false,
        user: currentUser() || '',
        email: currentUserEmail() || '',
        newPassword: "",
        passwordError: false,
        usernameError: false
    }

    handleChangePassword = () => { this.setState({ changePassword: true }) }
    handleUsername = (event) => { this.setState({ user: event.target.value }) }
    handleEmail = (event) => { this.setState({ email: event.target.value }) }
    handleNewPassword = (event) => { this.setState({ newPassword: event.target.value }) }

    handleSubmit = (e) => {
        const userInfo = {
            user: this.state.user,
            email: this.state.email,
            newPassword: this.state.newPassword,
            changePassword: this.state.changePassword
        }
        changeUser(userInfo, result => {
            if (result === "passwordError") this.setState({ passwordError: true });
            else if (result === "usernameError") this.setState({ usernameError: true });
        });
    };
    render() {
        return (
            <div id="settings-tab" >
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Username<span className="submit-asterik">*</span></Label>
                        <Input type="text" name="username" value={this.state.user} onChange={event => { this.handleUsername(event) }} required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email<span className="submit-asterik">*</span></Label>
                        <Input type="email" name="email" value={this.state.email} onChange={event => { this.handleEmail(event) }} required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Current Password<span className="submit-asterik">*</span></Label>
                        <Input type="password" name="currentpassword" placeholder="Current Password Here" required></Input>
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