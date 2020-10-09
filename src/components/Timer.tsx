import React, { useState } from "react";
import TimerButton from "./TimerButton";
import TimerButtom from "./TimerButton";

const Timer = () => {
  let [hour, setHour] = useState(0);
  let [minutes, setMinutes] = useState<number>(0);
  let [seconds, setSeconds] = useState<number>(0);
  let [interv, setInterv] = useState<any>();
  let [status, setStatus] = useState<number>(0);

  function run() {
    if (status !== 1) {
      setStatus(1);
      setInterv(
        setInterval(() => {
          start();
        }, 1000)
      );
    }
  }

  function start() {
    if (seconds === 60) {
      minutes++;
      setMinutes(minutes);
      seconds = 0;
    }

    if (minutes === 60) {
      hour++;
      setHour(hour);
      minutes = 0;
    }

    setSeconds(seconds++);
  }

  function stop() {
    if (status !== 0) {
      setStatus(2);
      clearInterval(interv);
    }
  }

  function reset() {
    setStatus(0);
    clearInterval(interv);
    setSeconds(0);
    setMinutes(0);
    setHour(0);
  }

  return (
    <div className="timer"> 
      <div className="displayTimer">
        <span>{hour < 10 ? `0${hour}` : hour}</span>:
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className="displayButton">
        <TimerButton
          buttonAction={run}
          buttonValue={status === 2 ? "Resume" : "Start"}
        />

        <TimerButtom
          buttonAction={stop}
          buttonValue={"Stop"}
        />

        <TimerButtom
          buttonAction={reset}
          buttonValue={"Reset"}
        />
      </div>
    </div>
  );
};

export default Timer;
