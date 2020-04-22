import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import './settings-tab.css';
import { currentUser, deleteUser } from '../../APIFunctions/user';

class DeleteTab extends Component {
    state = {
        deleteAccount: false,
        username: currentUser(),
        password: ''
    }
    handlePassword = (event) => { this.setState({ password: event.target.value })}
    handleDelete = (e) => {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(user);
        deleteUser(user, result => {
            if (result === "passwordError") this.setState({ passwordError: true });
        });
    }
    render() {
        return (
            <div id="settings-tab">
                <Form onSubmit={this.handleDelete}>
                    {!this.state.deleteAccount ?
                        (
                        <div>
                            <h4>Are you sure you want to delete your account?</h4>
                            <Button className="delete-tab-btn" color="success" onClick={() => { this.setState({ deleteAccount: true }) }}>Yes</Button>
                        </div>
                        )
                        :
                        (<FormGroup>
                            <Label>Confirm Your Password</Label>
                            <Input type="password" name="currentpassword" value={this.state.password} onChange={event => { this.handlePassword(event) }} required></Input>
                            <Button className="delete-tab-btn" color="danger" onClick={() => this.handleDelete} type="submit">Delete Account</Button>
                        </FormGroup>)
                    }
                </Form>
            </div>
        )
    }
}

export default DeleteTab;