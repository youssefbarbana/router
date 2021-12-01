import React from 'react'
import { Route, Routes } from 'react-router'
import MovieDescription from './Components/MovieDescription'
import Home from "./Home"

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/desc" element={<MovieDescription/>}/>
            </Routes>
        </div>
    )
}

export default App
