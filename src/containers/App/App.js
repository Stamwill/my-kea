import * as React from 'react'
import { heroText } from 'api/mock'
import Hero from 'blocks/Hero'
import AppDrawer from './partials/AppDrawer'
import TextContent from 'blocks/TextContent'
import classes from './App.module.css'
import About from 'blocks/About'

const App = () => {
  const [menuIsOpen, setMenuOpen] = React.useState(false)
  const [heading, setSlider] = React.useState(heroText[0].heading)
  const [text, setText] = React.useState(heroText[0].text)

  const toggleSlide = () => {
    setSlider(heroText[1].heading)
    setText(heroText[1].text)
  }

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <AppDrawer open={menuIsOpen} toggleMenu={toggleMenu} />
        <Hero toggleMenu={toggleMenu} />
        <TextContent heading={heading} text={text} toggleSlide={toggleSlide} />
      </header>

      <main>
        <About />
      </main>

      <footer></footer>
    </div>
  )
}

export default App
