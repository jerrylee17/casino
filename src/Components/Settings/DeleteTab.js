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
<<<<<<< HEAD
    handlePassword = (event) => { this.setState({ password: event.target.value }) }
=======
    handlePassword = (event) => { this.setState({ password: event.target.value })}
>>>>>>> f696f1b... Add functionality to delete a user when they want to (#44)
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
<<<<<<< HEAD
                            <Button className="delete-tab-btn" color="success" onClick={() => { this.setState({ deleteAccount: true }) }}>Yes i'm sure</Button>
=======
                            <Button className="delete-tab-btn" color="success" onClick={() => { this.setState({ deleteAccount: true }) }}>Yes</Button>
>>>>>>> f696f1b... Add functionality to delete a user when they want to (#44)
                        </div>
                        )
                        :
                        (<FormGroup>
                            <Label>Confirm Your Password</Label>
                            <Input type="password" name="currentpassword" value={this.state.password} onChange={event => { this.handlePassword(event) }} required></Input>
<<<<<<< HEAD
                            {this.state.passwordError ? <p>Incorrect password</p> : <></>}
=======
>>>>>>> f696f1b... Add functionality to delete a user when they want to (#44)
                            <Button className="delete-tab-btn" color="danger" onClick={() => this.handleDelete} type="submit">Delete Account</Button>
                        </FormGroup>)
                    }
                </Form>
            </div>
        )
    }
}

export default DeleteTab;