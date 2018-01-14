import React from 'react'
import { Slide, Heading } from 'spectacle'
import Live from '../../Live'

const code = `
class Hello extends React.Component {
  render() {
    const {name} = this.props
    return (
      <div>Hello {name}</div>
    )
  }
}

render(<Hello name='Julien' />)
`.trim()

export default (
  <Slide>
    <Heading fit>Class component</Heading>
    <Live code={code} />
  </Slide>
)
