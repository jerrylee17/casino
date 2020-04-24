import React from 'react'
import {
  Jumbotron
} from 'reactstrap'
import { cardHandler } from '../../../Games/utils/cardParser'

function importAll(r) {
  let images = {};
  // eslint-disable-next-line
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
var images = importAll(require.context('../../../Images/Games/Cards', true, /\.(png|jpe?g|svg)$/));

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
    <section className='cardsgrid'>
      {cardPath && cardPath.length && cardPath.map((object, index) => {
        return (
          <img className='deckcard' src={images[object]} alt=''/>
        )
      })}
    </section>
  )
}

