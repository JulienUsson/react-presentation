import React from 'react'
import { Slide, Heading } from 'spectacle'
import Live from '../../Live'

const code = `
const Hello = function(props) {
  return <div>Hello {props.name}</div>
}

render(<Hello name='Julien' />)
`.trim()

export default (
  <Slide>
    <Heading fit>Let's add some props</Heading>
    <Live code={code} />
  </Slide>
)
