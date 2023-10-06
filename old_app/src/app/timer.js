import { useEffect } from "react";

export const CreateTimer = (props) => {
    let gameState = props.gameState;

    useEffect(() => {
        ResetTimer();
        StartTimer();
    });

    let firstTime, interval;

    const StartTimer = () => {
        firstTime = new Date().getTime();
        interval = setInterval(UpdateTimer, 10);
    }

    const UpdateTimer = () => {
        let newTime = new Date().getTime();
        let elapsedTime = newTime - firstTime;

        let mil = Math.floor(elapsedTime / 1) % 60; 
        let sec = Math.floor(elapsedTime / 1000) % 60;
        let min = Math.floor(elapsedTime / 1000 / 60);

        let convertedTime = LeadingZero(min) + ':' + LeadingZero(sec) + ':' + LeadingZero(mil);

        document.getElementById('timer').innerHTML = convertedTime;

        //if (gameState === 4) { console.debug("timer stopped"); StopTimer();  }
        //if (gameState === 0) { console.debug("timer stopped"); StopTimer();  }
    }

    const LeadingZero = (num) => {
        return (num < 10 ? "0" : "") + num;
    }

    const StopTimer = () => { 
        clearInterval(interval);
        interval = null;
    }

    const ResetTimer = () => { 
        StopTimer();
        document.getElementById('timer').innerHTML = '00:00:00';
    }

    return (
        <div id="timerDiv">
            <p id="timer"></p>
        </div>
    );
}