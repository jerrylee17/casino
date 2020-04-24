import React, { Component } from "react";
import {Table, Container, Jumbotron} from 'reactstrap'
import "./Profile.css"
import { currentUser, getCredit } from "../../APIFunctions/user";
import ProfilePic from '../../Images/profile-pic.png'
import Badge1 from '../../Images/Gold Chain.png'
import Badge2 from '../../Images/Make it rain.png'
import Badge3 from '../../Images/Raining Coin.png'


class Profile extends Component {
  state = {
    user: "",
  };
  componentDidMount() {
    this.setState({
      user: currentUser(),
      credit: 0
    })
    getCredit(currentUser(),result =>{
      console.log(result)
      this.setState({
        credit: result[0].no_of_chips
      })
    })
  }
  render() {
    return (
      <div id="profile-page">
        <Jumbotron className="jumbo">
          <div className='text-center'>
            <h1 className='display-4'>{this.state.user}'s Profile</h1>
          </div>
          <img src={ProfilePic} class="center" width="200" height="180"></img>
      <p align="center"><b>Win/Loss Ratio: 100%</b></p>
      <p align="center"><b>Number of chips: {this.state.credit} </b><img src="https://media.giphy.com/media/13I3peucbA8BfG/giphy.gif" width="30" height="30"></img></p>
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
        <Table bgcolor="#00FF00">
          <thead>
           <tr>
             <th>$$</th>
             <th>Total Win</th>
             <th>Total Loss</th>
             <th>Total Games Played</th>
             <th>Type of Game</th>
            </tr>
          </thead>
          <tbody>
            <tr bgcolor="#77dd77">
              <th>{this.state.credit}</th>
              <th>10</th>
              <th>0</th>
              <th>5</th>
              <th>Blackjack</th>
            </tr>
            <tr bgcolor="#ff6961">
              <th>{this.state.credit}</th>
              <th>10</th>
              <th>1</th>
              <th>6</th>
              <th>Blackjack</th>
            </tr>
          </tbody>
        </Table>
      </Container>
      </div>
    );
  }
}

//will update to get info from db instead of file

export default Profile;
