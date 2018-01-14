import React from 'react'
import { Slide, Markdown, Heading } from 'spectacle'

const content = `
* [Redux](https://redux.js.org/)
* [React advanced guides](https://reactjs.org/docs/jsx-in-depth.html)
* [React router](https://reacttraining.com/react-router/)
* [Material UI](https://material-ui-next.com/getting-started/installation/)
* [React Native](http://facebook.github.io/react-native/)
`

export default (
  <Slide>
    <Heading fit>What to learn next ?</Heading>
    <Markdown>{content}</Markdown>
  </Slide>
)
