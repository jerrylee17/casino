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
    setWager
  } = props
  return (
    <div>
      <h1>User panel</h1>
      <br />
      <div className='text-center'>
        <Button
          color='success'
          size='lg'
          disabled={dispComponents}
          onClick={startGame}>
          Start game
        </Button>
      </div>
      <br />
      <Input
        placeholder='Enter wager. '
        disabled={dispComponents}
        onChange={(e) => {
          setWager(e.target.value)
        }}
      />
    </div>
  )
}
