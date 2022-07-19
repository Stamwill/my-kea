import * as React from 'react'
import { heroText } from 'api/mock'
import Hero from 'blocks/Hero'
import AppDrawer from './partials/AppDrawer'
import TextContent from 'blocks/TextContent'
import classes from './App.module.css'
import About from 'blocks/About'

const App = () => {
  const [menuIsOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <AppDrawer open={menuIsOpen} toggleMenu={toggleMenu} />
        <Hero toggleMenu={toggleMenu} />
        <TextContent heroText={heroText} />
      </header>

      <main>
        <About />
      </main>

      <footer></footer>
    </div>
  )
}

export default App
