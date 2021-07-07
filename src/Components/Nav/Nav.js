import React from 'react'
import logo from './../Assets/logo.png'
import './Nav.css'

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img src={logo} alt="logo" className="logo" />
                <p className="logo-text">TypeDash</p>
            </div>
            <div className="nav-right">
                <a
                    href="https://www.instagram.com/dheerajbisht_/"
                    target="_blank"
                    className="support-link"
                    rel="noreferrer"
                >
                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}

export default Nav
