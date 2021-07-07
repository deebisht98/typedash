import React from 'react'
import TestLetter from '../TestLetter/TestLetter'
import './TypingChallengeContainer.css'

const TypingChallengeContainer = ({ info, onTyping }) => {
    return (
        <div className="typing-challenge-container">
            <div className="judges">
                <div className="card">
                    <p>Words</p>
                    <h1 className="score">{info.words}</h1>
                </div>
                <div className="card">
                    <p>Characters</p>
                    <h1 className="score"> {info.characters}</h1>
                </div>
                <div className="card">
                    <p>Speed</p>
                    <h1 className="score">{info.speed}</h1>
                </div>
            </div>
            <h2 className="timer">
                00:
                {info.timeRemaining < 10
                    ? `0${info.timeRemaining}`
                    : `${info.timeRemaining}`}
            </h2>
            <p className="ins">
                {!info.timerStarted && 'Start typing to start the test'}
            </p>
            <div className="challenge-area">
                <div className="para field">
                    {info.testInfo.map((individualLetterInfo, index) => {
                        return (
                            <TestLetter
                                individualLetterInfo={individualLetterInfo}
                                key={index}
                            />
                        )
                    })}
                </div>
                <textarea
                    className="text-area field"
                    placeholder="Start typing here..."
                    onChange={(event) => onTyping(event.target.value)}
                ></textarea>
            </div>
        </div>
    )
}

export default TypingChallengeContainer
