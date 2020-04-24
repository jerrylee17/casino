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
  Container
} from "reactstrap";

import ShopUser from './UserShop';
import Logo from '../../Images/Shop/shop.svg';
import './shop.css'

class Shop extends Component {
  render() {

    const shopbadges = [
      {
        id: 1,
        badgeName: '10+ Wins in Blackjack',
        badgeDesc: 'Show off that you won over 10+ times in Blackjack!',
        badgeCost: 10,
        badgePurchased: false
      },
      {
        id: 2,
        badgeName: 'Ultimate OG Badge',
        badgeDesc: 'Show the newbies that you have been here since day 1! ',
        badgeCost: 1000,
        badgePurchased: true
      },
      {
        id: 3,
        badgeName: '10 Consecutive Days Online!',
        badgeDesc: 'Been online 10 days in a row is huge dedication! Get this badge to reward yourself.',
        badgeCost: 10,
        badgePurchased: false
      }
    ];

    // would like to add an image attribute in the future and replace chip balance w/ variable

    return (
      <div id="shop-page">
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
                {shopbadges.map((shopbadge, i) => {
                  return (
                    <div key={i}>
                      <Card>
                        <CardImg top src="https://66.media.tumblr.com/5e6f6e2c27c54517ea7b945919c97a39/tumblr_pfvoq9eW8j1uaogmwo2_250.png" size="100" />
                        {/* <br /> */}
                        <CardTitle><h5>{shopbadge.badgeName}</h5></CardTitle>
                        <CardBody>
                          <Row>
                            <CardSubtitle ><b>Cost: </b>{shopbadge.badgeCost}</CardSubtitle>
                          </Row>
                          <CardText>
                            <Row>
                              {shopbadge.badgeDesc}
                            </Row>
                          </CardText>
                        </CardBody>
                        <CardFooter>
                          <Row id="purchased-status">
                            <div className='col text-center'>
                              {shopbadge.badgePurchased ? "Already Purchased!" : "Not purchased!"}
                              <br /> <br />
                            </div>
                          </Row>
                          <Row>
                            <div className='col text-center'>
                              <Button
                                disabled={shopbadge.badgePurchased}
                                className='btn-dark'
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
