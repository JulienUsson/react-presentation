import React from 'react'
import { Slide, Heading } from 'spectacle'
import Live from '../../Live'

const code = `

const CanDrink = ({age}) => {
  if(age >= 18) {
    return <div>Can Drink</div> 
  } else {
    return <div>Can't Drink</div> 
  }
}

render(<CanDrink age={18}/>)
`.trim()

export default (
  <Slide>
    <Heading fit>Conditional Rendering</Heading>
    <Live code={code} />
  </Slide>
)
