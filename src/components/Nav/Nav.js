import React from 'react'
import { Block, Button, Span } from './Nav.elements'

export default function Nav() {
  return (
    <Block>
        <Span className='home'>
            <Button to={'/'}>Home</Button>
        </Span>
        <Span className="make">
          <Button to={'/make'}>Make word</Button>
        </Span>
        <Span className="guess">
          <Button to={'/guess'}>Guess word</Button>  
        </Span>
    </Block>
  )
}
