import { useState, useEffect } from "react";

export default function Countdown() {
  const [time, setTime] = useState(
    1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 60 * 23 + 1000 * 60 * 19 + 1000 * 56
  );
  const [running, _] = useState(true);

  useEffect(() => {
    let timer: any;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => Math.max(prevTime - 1000, 0));
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  const timeData = [
    {
      text: "Days",
      timeComplex: time / (60 * 60 * 24 * 1000),
    },
    {
      text: "Hours",
      timeComplex: (time / (60 * 60 * 1000)) % 24,
    },
    {
      text: "Minutes",
      timeComplex: (time / (60 * 1000)) % 60,
    },
    {
      text: "Seconds",
      timeComplex: (time / 1000) % 60,
    },
  ];

  const formatTime = (unit: any) => String(unit).padStart(2, "0");
  return (
    <div className="countdown flex items-center space-x-4">
      {timeData.map((TD, index) => (
        <div key={index} className="text-center w-14 -mt-5">
          <span className="block w-full text-[12px] text-start ml-2 text-gray-500">
            {TD.text}
          </span>
          <span className="block text-center w-full max-md:text-[28px] text-[32px] font-bold">
            {formatTime(Math.floor(TD.timeComplex))}{" "}
            <span className="text-mainColor">:</span>
          </span>
        </div>
      ))}
    </div>
  );
}
