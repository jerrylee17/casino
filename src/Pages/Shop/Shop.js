import React, { Component } from "react";
import {
  Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg,
  Col,
  Row,
  Button
  // Modal,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
} from "reactstrap";
import './shop.css';

import ReactDOM from 'react-dom';

function Shopbadges() {

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
  // would like to add an image attribute in the future
  return (
    <div>
      <h1>Shop</h1>
      <h2>Badges of the Day!</h2>
      <section className='user_chip'>
        <b>User's Chip Balance:</b> 5000
      </section>
      <section className='grid'>
        {shopbadges.map((shopbadge, i) => {
           return ( 
          <div key={i}>
            <Col md={10}>
              <Card>
                <CardImg top src="https://66.media.tumblr.com/5e6f6e2c27c54517ea7b945919c97a39/tumblr_pfvoq9eW8j1uaogmwo2_250.png" size="100"/>
                <CardBody>
                  <CardTitle>{shopbadge.badgeName}</CardTitle>
                  <CardSubtitle><b>Cost: </b>{shopbadge.badgeCost}</CardSubtitle>
                  <CardText>
                    <p>{shopbadge.badgeDesc}</p>
                    <Row>
                      <p>{shopbadge.badgePurchased ? "Already Purchased!" : "Not purchased!"}</p>
                    </Row>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </div>
             )
            })}  
                </section>
              
          </div>
  );
}
// not really sure for shop_no, is it randomized? how is it going to get assigned to the user?


export default Shopbadges;
