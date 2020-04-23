import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Jumbotron
} from 'reactstrap';
import './setting.css';
import SettingsTab from '../../Components/Settings/SettingsTab';
import DeleteTab from '../../Components/Settings/DeleteTab';
import ContactUsTab from '../../Components/Settings/ContactUsTab';
import Logo from '../../Images/Settings/settingLogo.png';

class Settings extends Component {
  state = {
    activeTab: "1"
  }

  handleTabToggle = (id) => {
    this.setState({ activeTab: id })
    console.log(this.state.activeTab)
  }

  render() {
    return (
      <div id="setting-page">
        <Jumbotron>
          <h1 className='display-4'>Settings <img src={Logo} className="image" alt="" id="settingLogo"></img></h1>
        </Jumbotron>
        <div className="setting-box">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={this.state.activeTab === "1" ? 'active' : 'nonactive'}
                onClick={() => { this.handleTabToggle("1") }}
              >
                Settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.activeTab === "2" ? 'active' : 'nonactive'}
                onClick={() => { this.handleTabToggle("2") }}
              >
                Delete Account
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.activeTab === "3" ? 'active' : 'nonactive'}
                onClick={() => { this.handleTabToggle("3") }}
              >
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <SettingsTab />
            </TabPane>
            <TabPane tabId="2">
              <DeleteTab />
            </TabPane>
            <TabPane tabId="3">
              <ContactUsTab />
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default Settings;
