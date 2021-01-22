import React, { useState, useEffect } from 'react'
import './styles/styles.css'

function Timer({startTimer, step, autoplay, id}) {

    const [time, setTime] = useState(startTimer);
    const [activeTimer, setActiveTimer] = useState(autoplay ? true : false);
    const [presentValueOfTime] = useState(startTimer);
    const [widthTape, setWidthTape] = useState('100');
    const stepInPx = widthTape/(time);
    const timerValue = 1000;

    const recoverTimer = () => {
        setTime(presentValueOfTime)
        setWidthTape('100');
    }

    const clickTimerButton = () => {
        setActiveTimer(!activeTimer)
        if(time === 0) {
            setWidthTape('100')
            setActiveTimer(activeTimer)
            setTime(startTimer)
        } 
    }

    useEffect(() => {

        document.getElementById(`${id}`).style.width = widthTape + '%';

        let visualTimer = setInterval(function() {
            if((time !== 0) && activeTimer) {
                <h1>{time}</h1>
                setTime(time - step)
                setWidthTape(widthTape - (stepInPx * step))
            } else {
                if(!activeTimer) setActiveTimer(false)
            }
        }, (step * timerValue) )

        return function stopTimer(){
            clearInterval(visualTimer)
        }
    });

    return (
        <div className='timerBlock'> 
            <h1>{time}</h1>
            <button onClick={clickTimerButton}>
                    {activeTimer && time !== 0 ? "Pause":"Start"}
            </button>
            <button onClick={recoverTimer}>Reset</button>
            <div className='tape' id={id}></div>
        </div>
    )
}

export default Timer; 