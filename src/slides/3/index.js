import React from 'react'
import { Slide, Heading } from 'spectacle'
import Live from '../../Live'

const code = `
const Foo = function() {
  return <div>Bar</div>
}

render(<Foo />)
`.trim()

export default (
  <Slide>
    <Heading fit>A simple component</Heading>
    <Live code={code} />
  </Slide>
)
