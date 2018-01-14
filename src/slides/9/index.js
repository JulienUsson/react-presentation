import React from 'react'
import { Slide, Heading } from 'spectacle'
import Live from '../../Live'

const code = `
const CanDrink = ({age}) => (
  <div>
    {age >= 18 ? 
      <span>Can Drink</span> 
      : 
      <span>Can't Drink</span>
    }

    {age === 18 && <span> since this year</span> }
  </div>  
)

render(<CanDrink age={18}/>)
`.trim()

export default (
  <Slide>
    <Heading fit>Conditional Rendering</Heading>
    <Live code={code} />
  </Slide>
)
