import React from 'react';

interface buttonComponent {
  buttonAction:  () => void
  buttonValue: string
}

const TimerButton = (props: buttonComponent) => {
  return (
    <div>
      <button onClick={props.buttonAction} >{props.buttonValue}</button>
    </div>
  )
}

export default TimerButton
