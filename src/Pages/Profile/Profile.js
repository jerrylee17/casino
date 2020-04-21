import React, { Component } from "react";
import {Table, Container, Jumbotron} from 'reactstrap'
import "./Profile.css"
import { currentUser } from "../../APIFunctions/user";
import ProfilePic from '../../Images/profile-pic.png'
import Badge1 from '../../Icon for Badges/Gold Chain.png'
import Badge2 from '../../Icon for Badges/Make it rain.png'
import Badge3 from '../../Icon for Badges/Raining Coin.png'


class Profile extends Component {
  state = {
    user: "",
  };
  componentDidMount() {
    this.setState({
      user: currentUser()
    })
  }
  render() {
    return (
      <div id="profile-page">
        <Jumbotron className="jumbo">
          <div className='text-center'>
            <h1 className='display-4'>Profile</h1>
          </div>
          <img src={ProfilePic} class="center" width="200" height="180"></img>
      <p align="center"><b>ID: {this.state.user}</b></p>
      <p align="center"><b>Win/Loss Ratio: 100%</b></p>
      <p align="center"><b>Number of chips: 420</b><img src="https://media.giphy.com/media/13I3peucbA8BfG/giphy.gif" width="30" height="30"></img></p>
      <p align="center"><b>Badges:</b></p>
      <section>
        <div class="gallery">
          <div>
            <img src={Badge1} width="50"></img>
            <img src={Badge2} width="50"></img>
            <img src={Badge3} width="50"></img>
          </div>
        </div>
      </section>
      </Jumbotron>
      <h1 align="center">Game History</h1>
      <Container>
        <Table>
          <thead>
           <tr>
             <th>Player</th>
             <th>$$</th>
             <th>Win Rate</th>
             <th>Total Wins</th>
             <th>Total Games Played</th>
             <th>Type of Game</th>
            </tr>
          </thead>
        </Table>
      </Container>
      </div>
    );
  }
}

//will update to get info from db instead of file

export default Profile;
