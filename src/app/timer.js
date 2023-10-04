import { useEffect } from "react";

export const CreateTimer = () => {

    useEffect(() => {
        ResetTimer();
        StartTimer();
    });

    let firstTime, interval;

    const StartTimer = () => {
        firstTime = new Date().getTime();
        interval = setInterval(UpdateTimer, 1000);
    }

    const UpdateTimer = () => {
        let newTime = new Date().getTime();
        let elapsedTime = firstTime - newTime;
        document.getElementById('').innerHTML = elapsedTime;
    }

    const StopTimer = () => { 
        clearInterval(interval);
        interval = null;
    }

    const ResetTimer = () => { 
        StopTimer();
        document.getElementById('').innerHTML = '00:00:00';
    }

    return (
        <div id="timerDiv">
            <p id="timer"></p>
        </div>
    );
}