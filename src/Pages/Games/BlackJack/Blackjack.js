import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap'
import './Blackjack.css'
import { BlackJackGame } from '../../../Games/BlackJack/blackjack'
import {
  Title,
  HandDisplay
} from './BlackJackComponents'


class BlackJack extends Component {
  state = {
    handValue: 0,
    dealerValue: 0
  }

  gameResult = {
    undefined: 'Game has not started',
    100: 'Game in progress...',
    0: 'Dealer wins!',
    1: 'Tie!',
    2: 'You win!'
  }


  handleGame = async (game) => {
    const [, phigh] = await game.getHandValue(game.playerHand);
    const [, dhigh] = await game.getHandValue(game.dealerHand);
    this.setState({
      game,
      handValue: phigh,
      dealerValue: dhigh,
      winner: 100
    })
  }

  handleGameEnd = async (game) => {
    const [, phigh] = await game.getHandValue(game.playerHand);
    const [, dhigh] = await game.getHandValue(game.dealerHand);
    let winner = game.determineWinner()
    this.setState({
      game,
      handValue: phigh,
      dealerValue: dhigh,
      winner: winner
    })
  }

  startGame = (game) => {
    game.reset()
    game.shuffle()
    game.initDeal()
  }

  render() {
    let game = new BlackJackGame()
    return (
      <div id='blackjack-page'>
        {Title('BlackJack')}
        <Container>
          <Row>
            <Col>
              <center><h2>{this.gameResult[this.state.winner]}</h2></center>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Button onClick={async () => {
                this.startGame(game)
                await this.handleGame(game)
                console.log(this.state)
              }}>
                Start game
              </Button>
              <br />
              <br />
              <Button
                hidden={this.state.winner === undefined}
                onClick={async () => {
                  if (!this.state.game || this.state.winner !== 100) {
                    return
                  }
                  let game = this.state.game
                  game.hit()
                  if (!game.checkBust()) {
                    await this.handleGame(game)
                  } else {
                    game.playDealer()
                    game.determineWinner()
                    await this.handleGameEnd(game)
                  }
                }}>
                Hit
              </Button>
              {" "}
              <Button
                hidden={this.state.winner === undefined}
                onClick={async () => {
                  if (!this.state.game || this.state.winner !== 100) {
                    return
                  }
                  let game = this.state.game
                  game.playDealer()
                  game.determineWinner()
                  await this.handleGameEnd(game)
                }}>
                Stop
              </Button>
            </Col>
            <Col>
              <center><h5>Player hand</h5></center>
              {this.state.game ?
                <div>
                  <HandDisplay hand={this.state.game.playerHand} />
                  {this.state.game.playerHand.join(' ')}
                </div>
                :
                (<center>Game not started</center>)}
              <br />
              Value: {this.state.handValue}
              <br />
            </Col>
            <Col>
              <center><h5>Dealer hand</h5></center>
              {this.state.game ?
                this.state.game.dealerHand.join(' ') :
                (<center>Game not started</center>)
              }
              <br />
              Value: {this.state.dealerValue}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default BlackJack;