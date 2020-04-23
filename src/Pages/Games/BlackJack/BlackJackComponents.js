import React from 'react'
import {
  Jumbotron
} from 'reactstrap'
import { cardHandler } from '../../../Games/utils/cardParser'
const imgPath = '../../../Images/Games/Cards'

var images = require.context(imgPath, true, /\.(png|jpe?g|svg)$/);
images.keys().forEach(function(key){
    images(key);
});

export const Title = (title) => (
  <Jumbotron>
    <div className='text-center'>
      <h1 className='display-4'>{title}</h1>
    </div>
  </Jumbotron>
)

export function HandDisplay(props) {
  const {
    hand
  } = props
  const cardParser = new cardHandler(hand)
  let cardPath = cardParser.getCards('')
  return (
    <section className='grid'>
      {cardPath && cardPath.length && cardPath.map((object, index) => {
        return (
          <div id={index}>
            path = {object}
            <img src={images[object]} />
          </div>
        )
      })}
    </section>
  )
}

