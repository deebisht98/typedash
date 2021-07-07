import './App.css'
import React from 'react'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Challenge from '../Challenge/Challenge'
import Footer from '../Footer/Footer'
import { SAMPLE_PARAGRAPHS } from './../data/Sample'

const duration = 60
const defaultState = {
    selectedParagraph: '',
    timerStarted: false,
    timeRemaining: duration,
    characters: 0,
    words: 0,
    speed: 0,
    testInfo: [],
}

function App() {
    const [info, setInfo] = React.useState(defaultState)

    const samplePara = () => {
        const data =
            SAMPLE_PARAGRAPHS[
                Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
            ]
        const paraArray = data.split('')
        const testInfo = paraArray.map((letter) => {
            return {
                testLetter: letter,
                status: 'notAttempted',
            }
        })
        setInfo({
            ...defaultState,
            selectedParagraph: data,
            testInfo,
        })
    }

    React.useEffect(() => {
        samplePara()
    }, [])

    const retry = () => {
        samplePara()
    }

    const onTyping = (value) => {
        if (!info.timerStarted) {
            setInfo((prev) => ({ ...prev, timerStarted: !prev.timerStarted }))

            let time = info.timeRemaining

            const tiktik = setInterval(() => {
                if (time > 0) {
                    const timespent = duration - time
                    setInfo((state) => ({
                        ...state,
                        timeRemaining: state.timeRemaining - 1,
                        speed:
                            timespent > 0
                                ? parseInt((state.words / timespent) * duration)
                                : 0,
                    }))
                    time = time - 1
                } else {
                    clearInterval(tiktik)
                }
            }, 1000)
        }
        const characters = value.length
        const words = value.split(' ').length - 1
        const index = characters - 1

        if (index < 0) {
            setInfo({
                ...info,
                testInfo: [
                    {
                        testLetter: info.testInfo[0].testLetter,
                        status: 'notAttempted',
                    },
                    ...info.testInfo.slice(1),
                ],
                testInfo: info.testInfo.map((elem) => {
                    return {
                        testLetter: elem.testLetter,
                        status: 'notAttempted',
                    }
                }),
                characters,
                words,
            })
            return
        }
        if (index >= info.selectedParagraph.length) {
            setInfo((prev) => ({
                ...prev,
                characters,
                words,
            }))
            return
        }

        const testInfo = info.testInfo
        if (!(index === info.selectedParagraph.length - 1)) {
            testInfo[index + 1].status = 'notAttempted'
        }
        const isCorrect = value[index] === testInfo[index].testLetter
        testInfo[index].status = isCorrect ? 'correct' : 'incorrect'
        setInfo((prev) => ({
            ...prev,
            testInfo,
            words,
            characters,
        }))
    }

    return (
        <div className="App">
            <Nav />
            <Landing />
            <Challenge info={info} onTyping={onTyping} retry={retry} />
            <Footer />
        </div>
    )
}

export default App
