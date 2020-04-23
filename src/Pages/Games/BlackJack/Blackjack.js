import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Jumbotron
} from 'reactstrap'
import './Blackjack.css'
import { BlackJackGame } from '../../../Games/BlackJack/blackjack'
// import { cardHandler } from '../../../Games/utils/cardParser'
const imgPath = '../../../Images/Games/Cards/'

class BlackJack extends Component {
  state = {
    handValue: 0,
    dealerValue: 0
  }

  gameResult = {
    undefined: 'Game in progress...',
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
      winner: undefined
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
        <Jumbotron>
          <div className='text-center'>
            <h1 className='display-4'>Blackjack</h1>
          </div>
        </Jumbotron>
        <Container>
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
                onClick={async () => {
                  if (!this.state.game || this.state.winner !== undefined) {
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
                  console.log(this.state)
                }}>
                Hit
              </Button>
              {" "}
              <Button
                onClick={async () => {
                  if (!this.state.game || this.state.winner !== undefined) {
                    return
                  }
                  let game = this.state.game
                  game.playDealer()
                  game.determineWinner()
                  await this.handleGameEnd(game)
                  console.log(this.state)
                }}>
                Stop
              </Button>
            </Col>
            <Col>
              Player hand: {this.state.game &&
                this.state.game.playerHand.join(' ')} = {this.state.handValue}
              <br />
              Dealer hand: {this.state.game &&
                this.state.game.dealerHand.join(' ')} = {this.state.dealerValue}
              <br /> <br />
              <center><h4>{this.gameResult[this.state.winner]}</h4></center>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default BlackJack;