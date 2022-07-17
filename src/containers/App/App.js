import * as React from 'react'
import Hero from 'blocks/Hero'
import classes from './App.module.css'
import AppNav from './partials/AppNav'

const App = () => {
  return (
    <div className={classes.root}>
      <header>
        <AppNav />
        <Hero />
      </header>

      <main></main>

      <footer>
        <p>footer</p>
      </footer>
    </div>
  )
}

export default App
