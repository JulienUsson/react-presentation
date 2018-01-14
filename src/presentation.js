import React from 'react'
import createTheme from 'spectacle/lib/themes/default'
import 'normalize.css'
import { Deck } from 'spectacle'

const slidesImports = [
  import('./slides/1'),
  import('./slides/2'),
  import('./slides/3'),
  import('./slides/4'),
  import('./slides/5'),
  import('./slides/6'),
]

const theme = createTheme(
  {
    primary: '#EFEFE4',
    secondary: '#1A252C',
    tertiary: '#F06B46',
    quartenary: '#7EA4A8',
  },
  {
    primary: 'Montserrat',
    secondary: 'Montserrat',
  }
)

export default class Presentation extends React.Component {
  state = {
    slides: [],
  }

  componentWillMount = async () => {
    const resolvedImports = await Promise.all(slidesImports)
    const slides = resolvedImports.map(slide => slide.default)
    this.setState({ slides })
  }

  render() {
    const { slides } = this.state
    if (slides.length === 0) {
      return 'Loading...'
    }

    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        {slides.map((slide, index) =>
          React.cloneElement(slide, { key: index })
        )}
      </Deck>
    )
  }
}
