import React, { Component } from "react";
import {
<<<<<<< HEAD
  Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg, CardFooter,
=======
<<<<<<< HEAD
<<<<<<< HEAD
  Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg,
  Col,
=======
  Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg, CardFooter,
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
  Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg, CardFooter,
>>>>>>> aad27cd... Fix css on pages and small additions (#40)
>>>>>>> ade4b8a... Fix css on pages and small additions (#40)
  Row,
  Button,
  Jumbotron
} from "reactstrap";

import ShopUser from './UserShop';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Logo from './clipart1116730.png';
=======
import Logo from '../../Images/shopLogo.png';
>>>>>>> aad27cd... Fix css on pages and small additions (#40)
=======
import Logo from '../../Images/Shop/shopLogo.png';
>>>>>>> 838d2b4... Refactor code to categorize images better (#48)
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
        badgePurchased: false
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

<<<<<<< HEAD
  return (
    <div id="shop-page">
      <Jumbotron>
        <div className='text-center'>
          <h1 className='display-4'>Shop <img src={Logo} className="image" alt=""></img> </h1>
          <ShopUser></ShopUser>
        </div>
      </Jumbotron>
      <h2>Badges of the Day!</h2>
      <section className='grid'>
        {shopbadges.map((shopbadge, i) => {
          return (
            <div key={i}>
<<<<<<< HEAD
              <Col md={11}>
                <Card>
                  <CardImg top src="https://66.media.tumblr.com/5e6f6e2c27c54517ea7b945919c97a39/tumblr_pfvoq9eW8j1uaogmwo2_250.png" size="100" />
                  <CardBody>
                     <CardTitle>{shopbadge.badgeName}</CardTitle>
                     <Row>
                       <CardSubtitle><b>Cost: </b>{shopbadge.badgeCost}</CardSubtitle>
                     </Row>
=======
>>>>>>> ade4b8a... Fix css on pages and small additions (#40)
import Logo from '../../Images/Shop/shopLogo.png';
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
        badgePurchased: false
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

=======
>>>>>>> e5b021e... Redesigned game dashboard frontend (#46)
    return (
      <div id="shop-page">
        <Jumbotron>
          <div className='text-center'>
            <h1 className='display-4'>Shop <img src={Logo} className="image" alt=""></img> </h1>
            <ShopUser></ShopUser>
          </div>
        </Jumbotron>
        <h2>Badges of the Day!</h2>
        <section className='grid'>
          {shopbadges.map((shopbadge, i) => {
            return (
              <div key={i}>
                <Card>
                  <CardImg top src="https://66.media.tumblr.com/5e6f6e2c27c54517ea7b945919c97a39/tumblr_pfvoq9eW8j1uaogmwo2_250.png" size="100" />
                  <CardBody>
                    <CardTitle><h5>{shopbadge.badgeName}</h5></CardTitle>
                    <Row>
                      <CardSubtitle ><b>Cost: </b>{shopbadge.badgeCost}</CardSubtitle>
<<<<<<< HEAD
                    </Row>
                    <CardText>
                      <Row style={{ height: '100px' }}>
                        {shopbadge.badgeDesc}
                      </Row>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      <Row>
                        {shopbadge.badgePurchased ? "Already Purchased!" : "Not purchased!"}
                      </Row>
                    </CardText>
                    <Row><Button>Purchase Badge!</Button></Row>
                    
                  </CardBody>
                </Card>
              </Col>
=======
              <Card>
                <CardImg top src="https://66.media.tumblr.com/5e6f6e2c27c54517ea7b945919c97a39/tumblr_pfvoq9eW8j1uaogmwo2_250.png" size="100" />
                <CardBody>
                  <CardTitle><h5>{shopbadge.badgeName}</h5></CardTitle>
                  <Row>
                    <CardSubtitle ><b>Cost: </b>{shopbadge.badgeCost}</CardSubtitle>
                  </Row>
                  <CardText>
                    <Row style={{ height: '100px' }}>
                      {shopbadge.badgeDesc}
=======
>>>>>>> e5b021e... Redesigned game dashboard frontend (#46)
                    </Row>
                    <CardText>
                      <Row style={{ height: '100px' }}>
                        {shopbadge.badgeDesc}
                      </Row>
                    </CardText>
                  </CardBody>

<<<<<<< HEAD
                <Row id="purchased-status">
                  {shopbadge.badgePurchased ? "Already Purchased!" : "Not purchased!"}
                </Row>
                <CardFooter>
                  <Button>Purchase Badge!</Button>
                </CardFooter>
              </Card>
>>>>>>> aad27cd... Fix css on pages and small additions (#40)
            </div>
          )
        })}
      </section>

    </div>
  );
=======
>>>>>>> ade4b8a... Fix css on pages and small additions (#40)
                    </CardText>
                  </CardBody>

                  <Row id="purchased-status">
                    {shopbadge.badgePurchased ? "Already Purchased!" : "Not purchased!"}
                  </Row>
                  <CardFooter>
                    <Button>Purchase Badge!</Button>
                  </CardFooter>
                </Card>
              </div>
            )
          })}
        </section>

      </div>
    );
  }
<<<<<<< HEAD
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
                  <Row id="purchased-status">
                    {shopbadge.badgePurchased ? "Already Purchased!" : "Not purchased!"}
                  </Row>
                  <CardFooter>
                    <Button>Purchase Badge!</Button>
                  </CardFooter>
                </Card>
              </div>
            )
          })}
        </section>

      </div>
    );
  }
>>>>>>> e5b021e... Redesigned game dashboard frontend (#46)
>>>>>>> 6ecf9be... Redesigned game dashboard frontend (#46)
}
// not really sure for shop_no, is it randomized? how is it going to get assigned to the user?


<<<<<<< HEAD
export default Shop;
=======
<<<<<<< HEAD
<<<<<<< HEAD
export default Shopbadges;
=======
export default Shop;
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
export default Shop;
>>>>>>> e5b021e... Redesigned game dashboard frontend (#46)
>>>>>>> 6ecf9be... Redesigned game dashboard frontend (#46)
