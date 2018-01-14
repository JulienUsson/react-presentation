import React from 'react'
import { Slide, Heading } from 'spectacle'
import Live from '../../Live'

const code = `
const Hello = ({name}) => <div>Hello {name}</div>

render(<Hello name='Julien' />)
`.trim()

export default (
  <Slide>
    <Heading fit>Back to the future</Heading>
    <Live code={code} />
  </Slide>
)
