import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import Slots from './slots'
import { Title } from './slotsComponents'
import './slotsWrapper.css'

export default function slotsWrapper(props) {
  return (
    <div id='slots-page' >
      {Title('Slots')}
      <Container>
        <Row>
          <Col md={5}>
            <h1>User panel</h1>
          </Col>
          <Col>
            <Slots />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
