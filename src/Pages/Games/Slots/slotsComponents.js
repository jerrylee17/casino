import React from 'react'
import {
  Jumbotron,
  Button,
  Input,
} from 'reactstrap'

export const Title = (title) => (
  <Jumbotron>
    <div className='text-center'>
      <h1 className='display-4'>{title}</h1>
    </div>
  </Jumbotron>
)

export function UserDashboard(props) {
  const {
    startGame,
    dispComponents,
    setWager,
    endGame,
    winner
  } = props
  return (
    <div>
      <h1>User panel</h1>
      <br />
      <div className='text-center'>
        <Button
          color='success'
          size='lg'
          hidden={dispComponents}
          onClick={startGame}>
          Start game
        </Button>
        <Button
          color='success'
          size='lg'
          hidden={!dispComponents}
          disabled={dispComponents && winner === null}
          onClick={endGame}>
          Reset Wager
        </Button>
      </div>
      <br />
      <Input
        placeholder='Enter wager. '
        disabled={dispComponents}
        onChange={(e) => {
          setWager(e.target.value)
        }}
      /> <br />
      Note: Winning slots gives you 50 times of your wager amount. Losing will subtract the wager.

    </div>
  )
}
