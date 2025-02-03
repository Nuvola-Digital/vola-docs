import React from "react";

import { useEffect, useState } from "react";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

const calculateTimeLeft = (targetTimestamp: number): Countdown => {
  const difference = targetTimestamp - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  const seconds = Math.floor((difference / 1000) % 60);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds, isComplete: false };
};

const useCountdown = (targetTimestamp: number): Countdown => {
  const [timeLeft, setTimeLeft] = useState<Countdown>(() =>
    calculateTimeLeft(targetTimestamp)
  );

  useEffect(() => {
    if (timeLeft.isComplete) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTimestamp));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTimestamp, timeLeft.isComplete]);

  return timeLeft;
};

export default function Countdown() {
  const { days, hours, minutes, seconds, isComplete } =
    useCountdown(1738944000000);
  return (
    <div
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        color: "var(--ifm-heading-color)",
      }}
    >
      {days}d {hours}h {minutes}m {seconds}s
    </div>
  );
}
