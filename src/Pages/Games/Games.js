import React from "react";
import {
  Container,
  Jumbotron,
  Table
} from "reactstrap";
import {
  Link
} from "react-router-dom";
import Logo from '../../Images/gameLogo.png';
import "./Games.css"

function Games() {
  const games = [
    {
      id: 1,
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
          <h1 className='display-4'>Games <img src={Logo} class="image" alt="" id="gameLogo"></img></h1>
        </div>
      </Jumbotron>
      <Container>
        <Table dark>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Name
              </th>
              <th>
                Hosted by
              </th>
              <th>
                Usercount
              </th>
              <th>
                Bots
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{game.id}</th>
                  <td>{game.gameName}</td>
                  <td>{game.gameHost}</td>
                  <td>{game.userCount}</td>
                  <td>{game.botsEnabled ? "Enabled" : "Disabled"}</td>
                  <td><Link to={game.link} className="btn btn-success">Join</Link></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Games;
