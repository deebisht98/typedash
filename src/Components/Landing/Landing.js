import React from 'react'
import flash from './../Assets/flash.png'
import Typewriter from 'typewriter-effect'
import './Landing.css'
const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Correct?', 'Quick?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div data-aos="fade-left" className="landing-right">
                <img src={flash} alt="flash" className="flash" />
            </div>
        </div>
    )
}

export default Landing
