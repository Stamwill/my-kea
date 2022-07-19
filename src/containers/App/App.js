import * as React from 'react'
import { heroText } from 'api/mock'
import Hero from 'blocks/Hero'
import TextContent from 'blocks/TextContent'
import classes from './App.module.css'
import About from 'blocks/About'

const App = () => {
  return (
    <div className={classes.root}>
      <header>
        <Hero />
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
