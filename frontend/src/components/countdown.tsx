import { useState, useEffect } from "react";

export default function Countdown() {
  const [time, setTime] = useState(
    1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 60 * 23 + 1000 * 60 * 19 + 1000 * 56
  ); // وقت مبدئي 3 أيام، 23 ساعة، 19 دقيقة، 56 ثانية
  const [running, _] = useState(true);

  useEffect(() => {
    let timer: any;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => Math.max(prevTime - 1000, 0)); // ضمان عدم النزول عن الصفر
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (unit: any) => String(unit).padStart(2, "0");
  return (
    <div className="countdown flex items-center space-x-4">
      <div className="text-center w-14 -mt-5">
        <span className="block w-full text-[12px] text-start ml-2 text-gray-500">
          Days
        </span>
        <span className="block text-center w-full max-md:text-[28px] text-[32px] font-bold">
          {formatTime(Math.floor(time / (60 * 60 * 24 * 1000)))}{" "}
          <span className="text-mainColor">:</span>
        </span>
      </div>
      <div className="text-center w-14 -mt-5">
        <span className="block w-full text-[12px] text-start ml-2 text-gray-500">
          Hours
        </span>
        <span className="block text-center w-full max-md:text-[28px] text-[32px] font-bold">
          {formatTime(Math.floor((time / (60 * 60 * 1000)) % 24))}{" "}
          <span className="text-mainColor">:</span>
        </span>
      </div>
      <div className="text-center w-14 -mt-5">
        <span className="block w-full text-[12px] text-start ml-2 text-gray-500">
          Minutes
        </span>
        <span className="block text-center w-full max-md:text-[28px] text-[32px] font-bold">
          {formatTime(Math.floor((time / (60 * 1000)) % 60))}{" "}
          <span className="text-mainColor">:</span>
        </span>
      </div>
      <div className="text-center w-14 -mt-5">
        <span className="block w-full text-[12px] text-start ml-2 text-gray-500">
          Seconds
        </span>
        <span className="block text-center w-full max-md:text-[28px] text-[32px] font-bold">
          {formatTime(Math.floor((time / 1000) % 60))}
        </span>
      </div>
    </div>
  );
}
