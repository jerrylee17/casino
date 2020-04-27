import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardFooter,
  Row,
  Col,
  Button,
  Jumbotron,
  Container,
  Alert
} from "reactstrap";
import ShopUser from './UserShop';
import Logo from '../../Images/Shop/shop.svg';
import './shop.css';
import { currentUser, getBadges, buyBadge } from '../../APIFunctions/user';

function importAll(r) {
  let images = {};
  // eslint-disable-next-line
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
var images = importAll(require.context('../../Images/Badges', true, /\.(png|jpe?g|svg)$/));

class Shop extends Component {

  state = {
    user: currentUser(),
    creditError: false,
    purchasedAlert: false,
    badges: []
  }

  componentDidMount() {
    getBadges(this.state.user, result => {
      this.setState({ badges: result })
    })
  }

  handlePurchased = (badgeName, badgeCost) => {
    buyBadge(this.state.user, badgeName, badgeCost, result => {
      if (result === "CreditError") {
        this.setState({ creditError: true })
        window.setTimeout(() => {
          this.setState({ creditError: false })
        }, 3000)
      }
      if (result.affectedRows === 1) {
        this.setState({ purchasedAlert: true })
        window.setTimeout(() => {
          window.location.reload(false);
        }, 3000)
      }
    });
  }

  render() {
    // would like to add an image attribute in the future and replace chip balance w/ variable

    return (
      <div id="shop-page">
        {this.state.creditError ?
          (<Alert id="credit-error-alert" color="danger">Not enough credit.</Alert>) : <></>}
        {this.state.purchasedAlert ?
          (<Alert id="purchased-alert" color="success">Purchased badge! Refreshing to reflect changes.</Alert>) : <></>}
        <Jumbotron>
          <div className='text-center'>
            <h1 className='display-4'>Shop <img src={Logo} className="image" alt=""></img> </h1>
            <ShopUser></ShopUser>
          </div>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <div className='text-center'>
                <h2>Badges of the Day!</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <section className='grid'>
                {this.state.badges.map((shopbadge, i) => {
                  return (
                    <div key={i}>
                      <Card>
                        <div className="text-center"><CardImg top src={images[shopbadge.badge_name + ".png"]} /></div>
                        {/* <br /> */}
                        <CardTitle><h5>{shopbadge.badge_name}</h5></CardTitle>
                        <CardBody>
                          <CardSubtitle ><b>Cost: </b>{shopbadge.badge_cost}</CardSubtitle>
                          <CardText>
                            {shopbadge.description}
                          </CardText>
                        </CardBody>
                        <CardFooter>
                          <Row id="purchased-status">
                            <div className='col text-center'>
                              {shopbadge.owned ? "Already Purchased!" : "Not purchased!"}
                              <br /> <br />
                            </div>
                          </Row>
                          <Row>
                            <div className='col text-center'>
                              <Button
                                disabled={shopbadge.owned ? true : false}
                                className='btn-dark'
                                onClick={() => { this.handlePurchased(shopbadge.badge_name, shopbadge.badge_cost) }}
                              >
                                Purchase Badge!
                              </Button>
                            </div>
                          </Row>
                        </CardFooter>
                      </Card>
                    </div>
                  )
                })}
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
// not really sure for shop_no, is it randomized? how is it going to get assigned to the user?


export default Shop;
