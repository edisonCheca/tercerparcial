import React from 'react'
import About from './About'
import Dashboard from './Dashboard'
import Home from './Home'

const Header = () => {
    return (
        <>
        <div className="container">
            <Home />
            <About />
            <Dashboard />
            <div>
                <h3>Home</h3>
            </div>
        </div>
        </>
    )
}

export default Header