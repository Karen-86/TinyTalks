"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

const CountdownTimer = () => {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(180);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset timer on interaction
  useEffect(() => {
    const resetTimer = () => setSecondsLeft(180);

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, []);

  // Countdown logic
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timerRef.current!);
  }, []);

  // Redirect when time is up
  useEffect(() => {
    if (secondsLeft === 0) {
      router.push("/timeout");
    }
  }, [secondsLeft, router]);

  const formatTime = (s: number) => {
    const m = String(Math.floor(s / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${m}:${sec}`;
  };

  return (
    <div className="w-fit bg-white shadow-lg border border-neutral-200 rounded-xl px-6 py-4 flex flex-col items-center space-y-2 z-50">
      <p className="text-sm font-medium text-neutral-600 uppercase tracking-wide">⏳ Time Is Priceless</p>
      <p className="text-1xl font-bold text-neutral-800 tracking-widest font-mono">
        {formatTime(secondsLeft)}
      </p>
    </div>
  );
};

export default CountdownTimer;
