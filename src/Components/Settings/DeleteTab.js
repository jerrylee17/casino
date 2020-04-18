import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import './settings-tab.css';

class DeleteTab extends Component {
    state = {
        deleteAccount: false
    }

    handleDelete = () => {
        // perform account deletion here
    }

    render() {
        return (
            <div id="settings-tab">
                <Form>
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
                            <Input type="password" name="currentpassword" placeholder="Enter Password Here" required></Input>
                            <Button className="delete-tab-btn" color="danger" onClick={() => this.handleDelete} type="submit">Delete Account</Button>
                        </FormGroup>)
                    }
                </Form>
            </div>
        )
    }
}

export default DeleteTab;