import React, { Component } from "react";
import {
  Jumbotron,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";
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
      </div>
    );
  }
}

export default Games;
