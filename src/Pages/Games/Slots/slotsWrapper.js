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

export default function SlotsWrapper() {
  const [wager, setWager] = useState(0)
  const [start, setStart] = useState(false)
  const [winner, setWinner] = useState(null)
  const [go, setGo] = useState(false)
  const startSlots = () => {
    setStart(true)
  }
  const endSlots = () => {
    setStart(false)
  }

  const SlotsProps = {
    result: (win) => {
      setWinner(win)
    },
  }

  const userDashboardProps = {
    dispComponents: (start !== false),
    setWager: setWager,
    startGame: startSlots,
    endGame: endSlots
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
            {start ? <Slots {...SlotsProps} /> : (
              <center><h1>Start game first!</h1></center>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

