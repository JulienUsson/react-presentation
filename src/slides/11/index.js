import React from 'react'
import { Slide, Heading } from 'spectacle'
import Live from '../../Live'

const code = `

const Hello = ({names}) => (
  <div>
    {names.map(name => <div key={name}>{name}</div>)}
  </div>
)

render(<Hello names={['Julien', 'Fernand', 'Pierre']}/>)
`.trim()

export default (
  <Slide>
    <Heading fit>List Rendering</Heading>
    <Live code={code} />
  </Slide>
)
