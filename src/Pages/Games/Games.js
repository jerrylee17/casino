import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Jumbotron,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";
import Logo from '../../Images/Games/gaming.svg';
import blackjackLogo from '../../Images/Games/blackjackLogo.jpg';
import coinLogo from '../../Images/Games/coinLogo.png';
import slotsLogo from '../../Images/Games/slotsLogo.png';
import "./Games.css"

export default function Games() {
  let history = useHistory();
  const [currentGame, setCurrentGame] = useState('blackjack');

  let handleGameChange = (e) => {
    e.preventDefault();
    setCurrentGame(e.target.value);
  }

  let handleGameImage = () => {
    let game = currentGame;
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

  let handlePlay = () => {
    history.push('/' + currentGame);
  }

  let gameLogo = handleGameImage();
  return (
    <div id="games-page">
      <Jumbotron className="jumbo">
        <div className='text-center'>
          <h1 className='display-4'>Games <img src={Logo} alt="" id="gameLogo"></img></h1>
        </div>
      </Jumbotron>
      <div className="games text-center">
        {gameLogo}
      </div>
      <div className="game-input">
        <Form id="game-form" inline>
          <FormGroup>
            <Input type="select" name="select" id="game-select" onChange={handleGameChange}>
              <option value="blackjack">Blackjack</option>
              <option value="coinflip">Coin Flip</option>
              <option value="slots">Slots</option>
            </Input>
          </FormGroup>
          <Button color="success" onClick={handlePlay}>Play</Button>
        </Form>
      </div>
    </div>
  );
}
