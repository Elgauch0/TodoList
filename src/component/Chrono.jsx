import React, { useEffect, useRef, useState } from 'react';

function Chrono() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const startTimeRef = useRef(0);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 100);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const startTimer = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setElapsedTime(0);
        setIsRunning(false);
    };

    const display = () => {
        const pad = (n) => (n < 10 ? '0' : '') + n;
        const minutes = Math.floor((elapsedTime % 3600000) / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        const milliseconds = Math.floor((elapsedTime % 1000) / 10);

        return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    };

    return (
        <div className='bg-slate-700 mx-auto text-center max-w-xl rounded-xl shadow-lg border-4'>
            <label className='text-6xl text-green-500 drop-shadow-2xl'>{display()}</label><br />
            <div className='flex justify-around w-1/2 m-auto text-xl p-2 '>
                <button className='bg-green-500 rounded-lg w-20 ' onClick={startTimer}>Start</button><br />
                <button className='bg-green-500 rounded-lg w-20' onClick={stopTimer}>Stop</button><br />
                <button className='bg-green-500 rounded-lg w-20' onClick={resetTimer}>Reset</button><br />
                
                
            </div>
        </div>
    );
}

export default Chrono;
