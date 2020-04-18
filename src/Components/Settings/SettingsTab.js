import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import './settings-tab.css';
import { currentUser, currentUserEmail } from '../../APIFunctions/user';

class SettingsTab extends Component {
    state = {
        changePassword: false,
        user: currentUser(),
        email: currentUserEmail()
    }

    handleChangePassword = () => { this.setState({ changePassword: true }) }
    handleUsername = (event) => { this.setState({ user: event.target.value }) }
    handleEmail = (event) => { this.setState({ email: event.target.value }) }

    render() {
        return (
            <div id="settings-tab">
                <Form>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="text" name="username" value={this.state.user} onChange={event => { this.handleUsername(event) }} required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" name="email" value={this.state.email} onChange={event => { this.handleEmail(event) }} required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Current Password</Label>
                        <Input type="password" name="currentpassword" placeholder="Current Password Here" required></Input>
                    </FormGroup>
                    {this.state.changePassword ?
                        (<FormGroup>
                            <Label>New Password</Label>
                            <Input type="password" name="newpassword" placeholder="New Password Here" required></Input>
                        </FormGroup>) :
                        (<FormGroup><Button color="link" onClick={this.handleChangePassword}>Change Password?</Button></FormGroup>)}
                    <Button outline id="submit-btn" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SettingsTab;