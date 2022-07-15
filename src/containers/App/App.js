import * as React from 'react'
import classes from './App.module.css'

const App = () => {
    return (
        <div className={classes.root}>
            <header>
                <p>nav</p>
            </header>

            <main>
                <p>main</p>
            </main>

            <footer>
                <p>footer</p>
            </footer>
        </div>
    )
}

export default App