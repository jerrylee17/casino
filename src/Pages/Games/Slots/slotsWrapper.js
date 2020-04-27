import React, { useState } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import Slots from './slots'
import {
  Title,
  UserDashboard
} from './slotsComponents'
import './slotsWrapper.css'
import {
  currentUser,
  playGame
} from '../../../APIFunctions/user'

export default function SlotsWrapper() {
  const [wager, setWager] = useState(0)
  const [start, setStart] = useState(false)
  const [winner, setWinner] = useState(null)
  const user = currentUser()
  const startSlots = () => {
    setStart(true)
  }
  const endSlots = () => {
    setStart(false)
    setWinner(null)
  }

  const saveResult = (win) => {
    let result = win ? 2 : 0
    console.log(result)
    playGame(user, wager, 'Slots', result, () => {
      console.log('Logged')
    })
  }

  const SlotsProps = {
    result: (win) => {
      setWinner(win)
    },
    saveResult: saveResult
  }

  const userDashboardProps = {
    dispComponents: (start !== false),
    setWager: setWager,
    startGame: startSlots,
    endGame: endSlots,
    winner: winner
  }
  return (
    <div id='slots-page' >
      {Title('Slots')}
      <Container>
        <Row>
          <Col md={5}>
            <UserDashboard {...userDashboardProps} />
          </Col>
          <Col>
            <div id='slots-component'>
              {start ? <Slots {...SlotsProps} /> : (
                <center><h1>Start game first!</h1></center>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

