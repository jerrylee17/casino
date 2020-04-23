import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import './settings-tab.css';
import { submitErrorReport } from '../../APIFunctions/user';

class ContactUsTab extends Component {
    state = {
        errorReport: '',
        success: false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.success) {
            submitErrorReport(this.state.errorReport, result => {
                this.setState({ success: true })
            })
        }
    }
    handleTextArea = (event) => { this.setState({ errorReport: event.target.value }) };
    render() {
        return (
            <div id="settings-tab">
                <Form onSubmit={this.handleSubmit}>
                    {this.state.success ? 
                        (<div>
                            <h4>Your feedback has been recorded!</h4>
                            <br/>
                            <p>Your feedback: {this.state.errorReport}</p>
                        </div>)
                        :
                        (<FormGroup>
                            <Label for="errorReport">Noticed something? Tell us about it!</Label>
                            <Input type="textarea" name="text" id="errorReport" value={this.state.errorReport} onChange={event => { this.handleTextArea(event) }} rows={5}/>
                            <Button className="delete-tab-btn" color="success" onClick={() => this.handleSubmit } type="submit">Submit</Button>
                        </FormGroup>)
                    }
                </Form>
            </div>
        )
    }
}

export default ContactUsTab;