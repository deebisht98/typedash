import React from 'react'
import Results from '../Results/Results'
import './Challenge.css'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'

const Challenge = ({ info, onTyping, retry }) => {
    return (
        <div className="challenge-container">
            <h1 data-aos="fade-up" className="challenge-heading">
                Take a speed test now!
            </h1>
            <div className="rect">
                {info.timeRemaining > 0 ? (
                    <TypingChallengeContainer info={info} onTyping={onTyping} />
                ) : (
                    <Results info={info} retry={retry} />
                )}
            </div>
        </div>
    )
}

export default Challenge
