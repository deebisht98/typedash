import React from 'react'
import './Results.css'

const TestContainer = ({ info, retry }) => {
    return (
        <div className="test-container">
            <h1 className="test-heading">Test Results</h1>
            <div className="test-data">
                <p>Characters: {info.characters}</p>
                <p>Words: {info.words}</p>
                <p>Speed: {info.speed} wpm</p>
            </div>
            <div className="buttons">
                <button
                    className="btn retry"
                    onClick={() => {
                        retry()
                    }}
                >
                    Re-try
                </button>
                <button
                    className="btn share"
                    onClick={() => {
                        window.open(
                            `https://www.facebook.com/sharer/sharer.php?u=`,
                            'facebook-share-dailog',
                            'width=800,height600'
                        )
                    }}
                >
                    Share
                </button>
                <button
                    className="btn tweet"
                    onClick={() => {
                        window.open(
                            'https://twitter.com/intent/tweet?text= ',
                            'Twitter',
                            'width=800,height600'
                        )
                    }}
                >
                    Tweet
                </button>
            </div>
        </div>
    )
}

export default TestContainer
