import React from 'react'
import {
  Jumbotron,
  Button,
  Input
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
    setWager,
    setPrediction,
    start,
    restartGame,
    disableComponents
  } = props
  return (
    <div>
      <h1>User panel</h1>
      <br />
      <h3>Prediction</h3>
      <Input
        type='select'
        disabled={start}
        onChange={(e) => {
          setPrediction(e.target.value)
        }}
      >
        <option>Heads</option>
        <option>Tails</option>
      </Input>
      <br />
      <div className='text-center'>
        <Button
          color='success'
          size='lg'
          disabled={disableComponents}
          onClick={start ? restartGame : startGame}>
          {start ? 'Reset game' : 'Start game'}
        </Button>
      </div>
      <br />
      <Input
        placeholder='Enter wager. '
        disabled={start}
        onChange={(e) => {
          setWager(e.target.value)
        }}
      />
    </div >
  )
}
