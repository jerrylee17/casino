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
<<<<<<< HEAD
<<<<<<< HEAD
import ContactUsTab from '../../Components/Settings/ContactUsTab';
import Logo from '../../Images/Settings/settingLogo.png';
=======
import Logo from '../../Images/settingLogo.png';
>>>>>>> aad27cd... Fix css on pages and small additions (#40)
=======
import Logo from '../../Images/Settings/settingLogo.png';
>>>>>>> 838d2b4... Refactor code to categorize images better (#48)

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
<<<<<<< HEAD
<<<<<<< HEAD
          <h1 className='display-4'>Settings <img src={Logo} className="image" alt="" id="settingLogo"></img></h1>
=======
          <h1 className='display-4'>Settings <img src={Logo} class="image" alt="" id="settingLogo"></img></h1>
>>>>>>> aad27cd... Fix css on pages and small additions (#40)
=======
          <h1 className='display-4'>Settings <img src={Logo} className="image" alt="" id="settingLogo"></img></h1>
>>>>>>> f696f1b... Add functionality to delete a user when they want to (#44)
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
<<<<<<< HEAD
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.activeTab === "3" ? 'active' : 'nonactive'}
                onClick={() => { this.handleTabToggle("3") }}
              >
                Contact Us
              </NavLink>
=======
>>>>>>> aad27cd... Fix css on pages and small additions (#40)
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
