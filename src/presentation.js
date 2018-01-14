import React from 'react'
import createTheme from 'spectacle/lib/themes/default'
import 'normalize.css'
import { Deck } from 'spectacle'

const slidesImports = [import('./slides/1'), import('./slides/2')]

const theme = createTheme(
  {
    primary: '#EFEFE4',
    secondary: '#F06B46',
    tertiary: '#7EA4A8',
    quartenary: '#1A252C',
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
