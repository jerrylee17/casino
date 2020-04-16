import React, { Component } from "react";
import {
  Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg,
  Col,
  Row,
  Button,
  Container,
  Jumbotron,
  // Modal,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
} from "reactstrap";
import {
  Link
} from "react-router-dom";
import "./Games.css"

function Games() {
  const games = [
    {
      id:1,
      gameName: 'Google Clubhouse',
      gameHost: 'google',
      userCount: '10',
      botsEnabled: false,
      link: 'www.google.com'
    },
    {
      id: 2,
      gameName: 'Youtube Jammers',
      gameHost: 'youtube',
      userCount: '3',
      botsEnabled: true,
      link: 'www.youtube.com'
    },
    {
      id: 3,
      gameName: 'U dummy',
      gameHost: 'dummy391',
      userCount: '1',
      botsEnabled: true,
      link: 'www.facebook.com'
    },
    {
      id: 3,
      gameName: 'U dummy',
      gameHost: 'dummy391',
      userCount: '1',
      botsEnabled: true,
      link: 'www.facebook.com'
    },
    {
      id: 3,
      gameName: 'U dummy',
      gameHost: 'dummy391',
      userCount: '1',
      botsEnabled: true,
      link: 'www.facebook.com'
    },
    {
      id: 3,
      gameName: 'U dummy',
      gameHost: 'dummy391',
      userCount: '1',
      botsEnabled: true,
      link: 'www.facebook.com'
    },
    {
      id: 3,
      gameName: 'U dummy',
      gameHost: 'dummy391',
      userCount: '1',
      botsEnabled: true,
      link: 'www.facebook.com'
    },
    {
      id: 3,
      gameName: 'U dummy',
      gameHost: 'dummy391',
      userCount: '1',
      botsEnabled: true,
      link: 'www.facebook.com'
    },
    {
      id: 3,
      gameName: 'U dummy',
      gameHost: 'dummy391',
      userCount: '1',
      botsEnabled: true,
      link: 'www.facebook.com'
    },
    {
      id: 3,
      gameName: 'U dummy',
      gameHost: 'dummy391',
      userCount: '1',
      botsEnabled: true,
      link: 'www.facebook.com'
    }
  ];
  
  return (
    <div id="games-page">
      <Jumbotron className="jumbo">
          <div className='text-center'>
            <h1 className='display-4'>Games</h1>
          </div>
      </Jumbotron>
      <Container>
        <Row className="external-align">
          {games.map((game, i) => {
            return ( 
              <div key={i}>
                <Container className="internal-align">
                  <Card>
                    <CardImg top width="100%" src="data:image/jpeg;base64,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" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{game.gameName}</CardTitle>
                      <CardText>
                          Hosted By: {game.gameHost}<br/>
                          Usercount: {game.userCount}<br/>               
                          Bots: {game.botsEnabled ? "Enabled" : "Disabled"}{"  "} 
                          <Link to={game.link} className="btn btn-success">Join Game</Link>
                      </CardText>
                    </CardBody>
                  </Card>
                </Container>
              </div>
            )
          })}  
            </Row>
        </Container>

    </div>
    );
}

export default Games;
