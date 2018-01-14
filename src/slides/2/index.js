import React from 'react'
import { Slide, Markdown } from 'spectacle'

const content = `
# Why React ?

* Declarative
* Component-Based
* Learn Once, Write Anywhere
`

export default (
  <Slide>
    <Markdown>{content}</Markdown>
  </Slide>
)
