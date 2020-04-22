import React, { Component } from "react";
import {
  Jumbotron,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";
<<<<<<< HEAD
<<<<<<< HEAD
import Logo from '../../Images/Games/gameLogo.png';
import blackjackLogo from '../../Images/Games/blackjackLogo.jpg';
import coinLogo from '../../Images/Games/coinLogo.png';
import slotsLogo from '../../Images/Games/slotsLogo.png';
import "./Games.css"

class Games extends Component {
  state = {
    currentGame: "blackjack"
  }

  handleGameChange = (e) => {
    e.preventDefault();
    this.setState({ currentGame: e.target.value })
  }

  handleGameImage = () => {
    let game = this.state.currentGame;
    if (game === "blackjack") {
      return (
        <img src={blackjackLogo} alt="" />
      )
    }
    else if (game === "coinflip") {
      return (
        <img src={coinLogo} alt="" />
      )
    }
    else {
      return (
        <img src={slotsLogo} alt="" />
      )
    }
  }

  render() {
    let gameLogo = this.handleGameImage();
    return (
      <div id="games-page">
        <Jumbotron className="jumbo">
          <div className='text-center'>
            <h1 className='display-4'>Games <img src={Logo} className="image" alt="" id="gameLogo"></img></h1>
          </div>
        </Jumbotron>
        <div className="games text-center">
          {gameLogo}
        </div>
        <div className="game-input">
          <Form id="game-form" inline>
            <FormGroup>
              <Input type="select" name="select" id="game-select" onChange={this.handleGameChange}>
                <option value="blackjack">Blackjack</option>
                <option value="coinflip">Coin Flip</option>
                <option value="slots">Slots</option>
              </Input>
            </FormGroup>
            <Button color="success">Play</Button>
          </Form>
        </div>
      </div>
    );
  }
=======
import {
  Link
} from "react-router-dom";
=======
>>>>>>> e5b021e... Redesigned game dashboard frontend (#46)
import Logo from '../../Images/gameLogo.png';
import blackjackLogo from '../../Images/blackjackLogo.jpg';
import coinLogo from '../../Images/coinLogo.png';
import slotsLogo from '../../Images/slotsLogo.png';
import "./Games.css"

class Games extends Component {
  state = {
    currentGame: "blackjack"
  }

  handleGameChange = (e) => {
    e.preventDefault();
    this.setState({ currentGame: e.target.value })
  }

  handleGameImage = () => {
    let game = this.state.currentGame;
    if (game === "blackjack") {
      return (
        <img src={blackjackLogo} alt="" />
      )
    }
    else if (game === "coinflip") {
      return (
        <img src={coinLogo} alt="" />
      )
    }
    else {
      return (
        <img src={slotsLogo} alt="" />
      )
    }
  }

  render() {
    let gameLogo = this.handleGameImage();
    return (
      <div id="games-page">
        <Jumbotron className="jumbo">
          <div className='text-center'>
            <h1 className='display-4'>Games <img src={Logo} className="image" alt="" id="gameLogo"></img></h1>
          </div>
        </Jumbotron>
        <div className="games text-center">
          {gameLogo}
        </div>
        <div className="game-input">
          <Form id="game-form" inline>
            <FormGroup>
              <Input type="select" name="select" id="game-select" onChange={this.handleGameChange}>
                <option value="blackjack">Blackjack</option>
                <option value="coinflip">Coin Flip</option>
                <option value="slots">Slots</option>
              </Input>
            </FormGroup>
            <Button color="success">Play</Button>
          </Form>
        </div>
<<<<<<< HEAD
      </Jumbotron>
      <Container>
        <Table dark>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Name
              </th>
              <th>
                Hosted by
              </th>
              <th>
                Usercount
              </th>
              <th>
                Bots
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{game.id}</th>
                  <td>{game.gameName}</td>
                  <td>{game.gameHost}</td>
                  <td>{game.userCount}</td>
                  <td>{game.botsEnabled ? "Enabled" : "Disabled"}</td>
                  <td><Link to={game.link} className="btn btn-success">Join</Link></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
>>>>>>> aad27cd... Fix css on pages and small additions (#40)
=======
      </div>
    );
  }
>>>>>>> e5b021e... Redesigned game dashboard frontend (#46)
}

export default Games;
