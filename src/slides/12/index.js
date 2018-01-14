import React from 'react'
import { Slide, Markdown, Heading } from 'spectacle'
import buildingBlocks from './building-blocks.png'

const content = `
![React is lego](${buildingBlocks})
`

export default (
  <Slide>
    <Heading fit>What is React ?</Heading>
    <Markdown>{content}</Markdown>
  </Slide>
)
