import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Input,
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
              <center><h3>Player hand</h3></center>
              <h6> Value: {this.state.handValue}</h6>
              <br /> <br />
              {this.state.game ?
                <HandDisplay hand={this.state.game.playerHand} /> :
                (<center>Game not started</center>)}
            </Col>
            <Col>
              <div className='text-center'>
                <Button
                  size='lg'
                  disabled={this.state.winner === 100}
                  onClick={async () => {
                    if (this.state.winner === 100) {
                      return
                    }
                    this.startGame(game)
                    await this.handleGame(game)
                  }}>
                  Start game
              </Button>
              </div>
              <br />
              <div className='text-center'>
                <Button
                  color='success'
                  hidden={this.state.winner !== 100}
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
                <span>&emsp;</span>
                <Button
                  color='danger'
                  hidden={this.state.winner !== 100}
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
                <br />
                <br />
                <Input
                  placeholder='Enter wager. '
                  disabled={this.state.winner === 100}
                />
              </div>
            </Col>
            <Col>
              <center><h3>Dealer hand</h3></center>
              <h6>{this.state.winner !== 100 ?
                'Value: ' + this.state.dealerValue:
                ''
              }</h6>
              <br /> <br />
              {this.state.game ? (
                (this.state.winner !== 100) ?
                  <HandDisplay hand={this.state.game.dealerHand} /> :
                  <HandDisplay hand={[0, this.state.game.dealerHand[0]]} />
              ) :
                (<center>Game not started</center>)
              }
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default BlackJack;