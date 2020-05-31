import React, { Component } from "react";
import {
  Jumbotron, Container, Row, Col, Alert
} from "reactstrap";
import {
  Link
} from "react-router-dom";
import { currentUser, dailyReward, updateLogin, updateCredit } from "../../APIFunctions/user";
import "./home.css";
import Logo from '../../Images/Landing/home.svg';
import Casino from '../../Images/Landing/casino.svg';
import Chips from '../../Images/Landing/earningchips.svg';
import ShoppingCart from '../../Images/Landing/shopping-cart.svg';
import ShoppingBag from '../../Images/Landing/shopping-bag.svg';
import ProfileOne from '../../Images/Landing/human.svg';
import ProfileTwo from '../../Images/Landing/profile.svg';
import ChangeProfileOne from '../../Images/Landing/human-two.svg';
import ChangeProfileTwo from '../../Images/Landing/pen.svg';

const groupMembers = ['Fanus Arefaine', 'Jerry Lee', 'Calvin Ly', 'Tiffany Nguyen', 'Habib Sorathia', 'Tien Tran'];

class Home extends Component {
  state = {
    user: "",
  };
  componentDidMount() {
    this.setState({
      user: currentUser(),
      dailyReward: false
    })
    dailyReward(result => {
      let lastLogin = result[0].last_login;
      let checkLogin = new Date(new Date(lastLogin).getTime() + 60 * 60 * 24 * 1000).toJSON(); // lastLogin + 24hours
      let currentLogin = new Date().toJSON();
      // eligible for daily reward if equal to or more than 24 hours
      if (currentLogin >= checkLogin) {
        this.setState({ dailyReward: true });
        updateLogin(); // updates last login date
        updateCredit(this.state.user, 500); // updates user's credit
        window.setTimeout(() => { this.setState({ dailyReward: false }) }, 3000)
      }
    })
  }
  render() {
    return (
      <div id="home-page">
        {this.state.dailyReward ? (<Alert id="reward-alert" color="success">You have received your daily reward! +500 chips</Alert>) : <></>}
        <Jumbotron>
          <div className='text-center'>
            <h1 className='display-4'>Home <img src={Logo} alt="" id="homeLogo"></img></h1>
          </div>
        </Jumbotron>
        <Container className='container-main'>
          <Row className="rows">
            <Col className='col-imgs'>
              <img src={Casino} alt="" className="imgs"></img>
            </Col>
            <Col md={6} className='intro-title'>
              <h1>A home to online gambling</h1>
              <p>
                Blips is the best outlet to play games, win chips, and
                experience gambling during quarantine.
              </p>
              <Link to={'/Games/'} className="btn btn-success">Play Games</Link>
            </Col>
          </Row>
          <Row className="rows">
            <Col md={6} className='col-txt'>
              <h2>Earning Chips</h2>
              <div>
                There are a few ways to earn chips
                <ul>
                  <li>
                    For each game you play, you can bet a certain amount of chips,
                    if you win, you can take home twice (or more!)
                  </li>
                  <li>
                    There's a daily login bonus of 200 chips (24 hours after
                    your previous login))
                  </li>
                </ul>
                <p>Don't forget to spend your chips at the shop!</p>
              </div>
            </Col>
            <Col className='col-imgs'>
              <img src={Chips} alt="" className="imgs"></img>
            </Col>
          </Row>
          <Row className="rows">
            <Col className='col-txt component-outline'>
              <Link className='component-outline' to={'/Shop/'}>
                <h2>Shop <img src={ShoppingCart} alt="" className="imgs-icons"></img>
                  <img src={ShoppingBag} alt="" className="imgs-icons"></img></h2>
                <p>
                  Spend all your hard earned chips at the shop, where you can buy
                  new badges and deck out your profile.
              </p>
              </Link>
            </Col>
            <Col md={1}></Col>
            <Col className='col-txt component-outline'>
              <Link className='component-outline' to={'/Profile/'}>
                <h2>Profile <img src={ProfileOne} alt="" className="imgs-icons"></img>
                  <img src={ProfileTwo} alt="" className="imgs-icons"></img></h2>
                <p>
                  Check out your wins and losses, how many chips you have, and more
                  at your user profile.
              </p>
              </Link>
            </Col>
          </Row>
          <Row className="rows">
            <Link className='component-outline' to={'/Settings/'}>
              <Col md={10} className='col-txt'>
                <h2>User Settings <img src={ChangeProfileOne} alt="" className="imgs-icons"></img>
                  <img src={ChangeProfileTwo} alt="" className="imgs-icons"></img></h2>
                <p>
                  Head over to the user settings page to change your account details
                  like your username, email, password, and more. Also, feel free to
                  give us feedback here about what we can improve about the website!
              </p>
              </Col>
            </Link>
          </Row>
        </Container>
        <div id='contact-us'>
          <Container id='contact-us'>
            <Row className='rows-contact'>
              <Col className='col-contact'>
                <center> <p><b>Made by</b></p></center>
              </Col>
            </Row>
            <Row className='rows-contact'>
              {groupMembers.map((member, i) => (
                <Col key={i}>
                  <center><p>{member}</p></center>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
