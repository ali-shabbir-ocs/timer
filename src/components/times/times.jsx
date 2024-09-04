
import './times.scss';

import { useState, Fragment, useEffect } from 'react';
const Times = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        let intervalId;
        if (isRunning) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            intervalId = setInterval(() => setTime(time + 1), 10 );
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    // Hours calculation
    const hours = Math.floor(time / 360000);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;

    // Method to start and stop timer
    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

    const reset = () => {
        setIsRunning(false);
        setTime(0);
    };
    return (
        <Fragment>
            <div className="time-container">
                <div className="each-container">
                    <div className="time">
                        <h1>{hours.toString().padStart(2, "0")}</h1>
                    </div>
                    <div className="display">
                        <h3>Hours</h3>
                    </div>
                </div>
                <div className="each-container">
                    <div className="time">
                        <h1>{minutes.toString().padStart(2, "0")}</h1>
                    </div>
                    <div className="display">
                        <h3>Minutes</h3>
                    </div>
                </div>
                <div className="each-container">
                    <div className="time">
                        <h1>{seconds.toString().padStart(2, "0")}</h1>
                    </div>
                    <div className="display">
                        <h3>Seconds</h3>
                    </div>
                </div>
                <div className="each-container">
                    <div className="time">
                        <h1>{milliseconds.toString().padStart(2, "0")}</h1>
                    </div>
                    <div className="display">
                        <h3>Milli-Seconds</h3>
                    </div>
                </div>
            </div>
            <div className='buttons'>
                <button type='button' onClick={startAndStop}>
                    {isRunning ? "Stop" : "Start"}</button>
                <button type='button' onClick={reset}>Reset</button>
            </div>
        </Fragment>
    )
}
export default Times;