import React from 'react';
import { useTimer } from 'react-timer-hook';

export default function Timer({ onFinish, onRestart }) {
  const duration = 5;
  const time = new Date();
  time.setSeconds(time.getSeconds() + duration);
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp: time,
    onExpire: onFinish,
  });

  return (
    <span>
      {minutes}:{seconds}
    </span>
  );
}
