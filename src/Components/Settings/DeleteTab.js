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
<<<<<<< HEAD
<<<<<<< HEAD
    handlePassword = (event) => { this.setState({ password: event.target.value }) }
=======
    handlePassword = (event) => { this.setState({ password: event.target.value })}
>>>>>>> f696f1b... Add functionality to delete a user when they want to (#44)
=======
    handlePassword = (event) => { this.setState({ password: event.target.value }) }
>>>>>>> 57b49bb... Added functionality for user to submit feedback report (#54)
=======
    handlePassword = (event) => { this.setState({ password: event.target.value }) }
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
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
<<<<<<< HEAD
<<<<<<< HEAD
                            <Button className="delete-tab-btn" color="success" onClick={() => { this.setState({ deleteAccount: true }) }}>Yes i'm sure</Button>
=======
                            <Button className="delete-tab-btn" color="success" onClick={() => { this.setState({ deleteAccount: true }) }}>Yes</Button>
>>>>>>> f696f1b... Add functionality to delete a user when they want to (#44)
=======
                            <Button className="delete-tab-btn" color="success" onClick={() => { this.setState({ deleteAccount: true }) }}>Yes i'm sure</Button>
>>>>>>> 57b49bb... Added functionality for user to submit feedback report (#54)
=======
                            <Button className="delete-tab-btn" color="success" onClick={() => { this.setState({ deleteAccount: true }) }}>Yes i'm sure</Button>
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
                        </div>
                        )
                        :
                        (<FormGroup>
                            <Label>Confirm Your Password</Label>
                            <Input type="password" name="currentpassword" value={this.state.password} onChange={event => { this.handlePassword(event) }} required></Input>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                            {this.state.passwordError ? <p>Incorrect password</p> : <></>}
=======
>>>>>>> f696f1b... Add functionality to delete a user when they want to (#44)
=======
                            {this.state.passwordError ? <p>Incorrect password</p> : <></>}
>>>>>>> 57b49bb... Added functionality for user to submit feedback report (#54)
=======
                            {this.state.passwordError ? <p>Incorrect password</p> : <></>}
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
                            <Button className="delete-tab-btn" color="danger" onClick={() => this.handleDelete} type="submit">Delete Account</Button>
                        </FormGroup>)
                    }
                </Form>
            </div>
        )
    }
}

export default DeleteTab;