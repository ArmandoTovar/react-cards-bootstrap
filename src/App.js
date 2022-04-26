import React from 'react'
import Cards from './components/Cards'
import './App.css'
function App() {
    return (


        <div className="App">
            <h1> The creative crew </h1>
            <p className="Quien"> Who we Are </p>
            <p className="Parrafo">We are team of creatively diverse.  driven.  innovative individuals working in various locations from the world.</p>
        

            <Cards />
            <p className="Final">created by Armando Tovar - devChallenges.io</p>
        </div>

        )   
}
export default App