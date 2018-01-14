import React from 'react'
import { Slide, Heading } from 'spectacle'
import Live from '../../Live'

const code = `
class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
  }

  render() {
    const {counter} = this.state
    return (
      <div>
        <button onClick={(e) => this.setState({counter: counter + 1})}>
          counter : {counter}
        </button>
      </div>
    )
  }
}
`.trim()

export default (
  <Slide>
    <Heading fit>Component state</Heading>
    <Live code={code} inline />
  </Slide>
)
