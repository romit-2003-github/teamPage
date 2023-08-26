import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className="navbarHeader">
                <img src={require("../images/logo.jpeg")} alt="loading" />
                <nav className="navbar">
                    <li className="items">HOME</li>
                    <li className="items">COURSES</li>
                    <li className="items">SELECTIONS</li>
                    <li className="items">BLOGS</li>
                    <li className="items">MATERIAL</li>
                    <li className="items">CONTACT US</li>
                </nav>
                <div className="loginButton">
                    <button className='btn btn-success'>Login</button>
                </div>
            </header>
        </>
    )
}

export default Navbar
