import React, { useState, useEffect } from 'react'
import {
  Button,
  Input,
  Row,
  Col,
  Container,
  Jumbotron
} from 'reactstrap'
import './Coinflip.css'
import {
  Title,
  UserDashboard
} from './CoinflipComponents'


export default function Coinflip() {
  // false = tails, true = heads
  const [winloss, setWinLoss] = useState(false)
  const [start, setStart] = useState(false)
  const [wager, setWager] = useState(0)
  const [coinClass, setCoinClass] = useState('')
  const [result, setResult] = useState('')
  const [prediction, setPrediction] = useState('heads')
  const [disableComponents, setDisableComponents] = useState(false)
  const startGame = () => {
    setStart(true)
    handleCoinFlip()
  }
  const restartGame = () => {
    setStart(false)
    setResult('')
    setCoinClass('')
    setWinLoss(false)
  }

  const DashboardProps = {
    startGame: startGame,
    setWager: setWager,
    setPrediction: setPrediction,
    start: start,
    restartGame: restartGame,
    disableComponents: disableComponents
  }

  const handleCoinFlip = () => {
    if (start === false) return
    setCoinClass('')
    let flipResult = Math.random()
    let result = (flipResult <= 0.5) ? 'heads' : 'tails'
    setTimeout(() => {
      setCoinClass(result)
      setDisableComponents(true)
      handleResult(result)
    }, 100)
  }

  const handleResult = (result) => {
    setTimeout(() => {
      setResult(result)
      setWinLoss((prediction.toLowerCase() === result.toLowerCase()))
      setDisableComponents(false)
    }, 3000)
  }

  return (
    <div id='coinflip-page'>
      {Title('Coin flip')}
      <Container>
        <Row>
          <Col md={5}>
            <UserDashboard {...DashboardProps} />
          </Col>
          <Col>
            <center><h3>{
              start ? (
              coinClass ? (
              !disableComponents ? (`Your result was ${result}!`)
              : 'Flipping...')
              : 'Click the coin to flip')
              : 'Enter wager and start game!'
            }</h3></center> <br />
            <div id='coin'
              className={coinClass}
              onClick={disableComponents ? '' : handleCoinFlip}
            >
              <div class='side-a'></div>
              <div class='side-b'></div>
            </div> <br />
            <center><h3>{
              result ? (
                !disableComponents ? `You ${winloss ? 'won' : 'lost'}!`
                  : '')
                : ''
            }</h3></center>
          </Col>
        </Row>
      </Container>
    </div>
  )
}