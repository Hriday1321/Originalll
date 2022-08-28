import React from 'react'
import { Block, Button} from './Nav.elements'

export default function Nav() {
  return (
    <Block>
        <span className='home'>
            <Button to={'/'}>Home</Button>
        </span>
        <span className="make">
          <Button to={'/make'}>Make word</Button>
        </span>
        <span className="guess">
          <Button to={'/guess'}>Guess word</Button>  
        </span>
    </Block>
  )
}
