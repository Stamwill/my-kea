import * as React from 'react'
import { sliderImgs } from 'api/mock'
import classes from './App.module.css'

const App = () => {
    return (
        <div className={classes.root}>
            <header>
                <p>nav</p>
            </header>

            <main>
                {sliderImgs.map((img,idx) => (
                    <img src={img.img} alt="test" key={idx}/>
                ))}
            </main>

            <footer>
                <p>footer</p>
            </footer>
        </div>
    )
}

export default App