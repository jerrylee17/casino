import React, { Component } from "react";
import {Table, Container, Jumbotron} from 'reactstrap'
import "./Profile.css"
import { currentUser, getCredit, getBadges, getWinrate, getWins, getLosses, getHistory } from "../../APIFunctions/user";
import ProfilePic from '../../Images/Profile/profile.svg'

function importAll(r) {
  let images = {};
  // eslint-disable-next-line
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
var images = importAll(require.context('../../Images/Badges', true, /\.(png|jpe?g|svg)$/));

class Profile extends Component {
  state = {
    user: "",
    badges: [],
    games: [],
    winrate: 0,
    own: false,
  };
  componentDidMount() {
    this.setState({
      user: currentUser(),
      credit: 0
    })
    getCredit(currentUser(),result =>{
      this.setState({
        credit: result[0].no_of_chips
      })
    })
    getBadges(currentUser(),result =>{
      this.setState({
        badges: result
      })
    })
    getWinrate(currentUser(),result =>{
      let win = result[0].no_of_wins;
      let loss = result[0].no_of_losses;
      this.setState({
        winrate: Math.floor(win/(win+loss) * 100)
      })
      console.log(this.state.winrate)
    })
    getWins(currentUser(),result =>{
      this.setState({
        wins: result[0].no_of_wins
      })
    })
    getLosses(currentUser(),result =>{
      this.setState({
        losses: result[0].no_of_losses
      })
    })
    getHistory(currentUser(),result =>{
      this.setState({
        games: result
      })
      console.log(this.state.games)
    })
  }
  render() {
    let own = false;
    return (
      <div id="profile-page">
        <Jumbotron className="jumbo">
          <div className='text-center'>
            <h1 className='display-4'>{this.state.user}'s Profile</h1>
          </div>
          <img src={ProfilePic} class="center" width="200" height="180" alt=''></img>
      <p align="center"><b>Win Rate: { isNaN(this.state.winrate) ? "0%" : (this.state.winrate+"%")}</b></p>
      <p align="center"><b>Number of chips: {this.state.credit} </b><img src="https://media.giphy.com/media/13I3peucbA8BfG/giphy.gif" width="30" height="30" alt=''></img></p>
      <p align="center"><b>Badges:</b></p>
      <section>
        <div class="gallery">
          <div>
            {this.state.badges.map((Badge,i) => {
              console.log(this.state.badges.length);
              if (Badge.owned){
                own = true;
                return (
                  <img className="images" key={i} src={images[Badge.badge_name+".png"]} alt=""></img>
                )
              }
              return true
            })}
            {own ? "" : <p>You don't have any badges. Check out our shop</p>}
          </div>
        </div>
      </section>
      </Jumbotron>
      <h1 align="center">Game History</h1>
      <Container>
        <Table bgcolor="#00FF00">
          <thead>
           <tr id="TableHeader">
             <th>Game #</th>
             <th>Win/Loss</th>
             <th>Wager</th>
             <th>Type of Game</th>
            </tr>
          </thead>
          <tbody>
          {this.state.games.map((game,i) => {
            let game_state = {0:"Loss", 1:"Tie", 2:"Win"};
            return (
              <tr className={game_state[game.winner]} key={i}>
                <th>{i}</th>
                <th>{game_state[game.winner]}</th>
                <th>{game.wager_amt}</th>
                <th>{game.game_type}</th>
              </tr>
            )
            })}
          </tbody>
        </Table>
      </Container>
      </div>
    );
  }
}

export default Profile;
