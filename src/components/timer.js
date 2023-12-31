import { useEffect, useContext } from "react";
import { GameStateContext } from "../globalManagement/gameStateContext";

export const CreateTimer = () => {
  // eslint-disable-next-line no-unused-vars
  const [gameState, _] = useContext(GameStateContext);

  useEffect(() => {
    ResetTimer();
    StartTimer();

    return () => {
      StopTimer();
    };
  });

  let firstTime, interval;

  const StartTimer = () => {
    firstTime = new Date().getTime();
    interval = setInterval(UpdateTimer, 10);
  };

  const UpdateTimer = () => {
    if (gameState === 2) {
      StopTimer();
    } else {
      const newTime = new Date().getTime();
      const elapsedTime = newTime - firstTime;

      const mil = Math.floor(elapsedTime / 1) % 60;
      const sec = Math.floor(elapsedTime / 1000) % 60;
      const min = Math.floor(elapsedTime / 1000 / 60);

      const convertedTime =
        LeadingZero(min) + ":" + LeadingZero(sec) + ":" + LeadingZero(mil);

      document.getElementById("timer").innerHTML = convertedTime;
    }
  };

  const LeadingZero = (num) => {
    return (num < 10 ? "0" : "") + num;
  };

  const StopTimer = () => {
    clearInterval(interval);
    interval = null;
  };

  const ResetTimer = () => {
    StopTimer();
    document.getElementById("timer").innerHTML = "00:00:00";
  };

  return (
    <div className="timerDiv">
      <p className="timerText" id="timer"></p>
    </div>
  );
};
