import { Button, ButtonGroup } from '@mui/material'
import React, { useReducer } from 'react'
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';

const initialState = 0
const reducerFunc = ( countState, action) => {
  switch (action) {
    case 'increment':
      return countState + 1
    case 'decrement':
      return countState - 1
    case 'reset':
      return initialState
    default:
      return countState
  }
}


const Counter = () => {
  const [ count, dispatch ] = useReducer( reducerFunc, initialState)
  return (
    <>
      <h2>カウント:{count}</h2>
      <ButtonGroup>
        <Button onClick={() => dispatch('increment')}>increment</Button>
        <Button onClick={() => dispatch('decrement')}>devrement</Button>
        <Button onClick={() => dispatch('reset')}>reset</Button>
      </ButtonGroup>
    </>
  )
}

export default Counter;