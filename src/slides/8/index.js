import React from 'react'
import { Slide, Heading } from 'spectacle'
import Live from '../../Live'

const code = `
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: ''}
  }

  render() {
    const {name} = this.state
    return (
      <div>
        <input 
          value={name}
          onChange={(e) => this.setState({name: e.target.value})}
        />
        {name}
      </div>
    )
  }
}
`.trim()

export default (
  <Slide>
    <Heading fit>Handling Events</Heading>
    <Live code={code} inline />
  </Slide>
)
