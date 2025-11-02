import { useEffect, useState } from "react";


export default function Timer() {

    const [time, setTime] = useState(
        1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 60 * 23 + 1000 * 60 * 19 + 1000 * 56
      );
      const [running,_] = useState(true);
    
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

]

  const formatTime = (unit: any) => String(unit).padStart(2, "0");


  return (
    <div className="bestProductCountDown flex gap-5 my-10 max-md:justify-center">

        {timeData.map((TD, index) => (

            <div key={index} className="text-center size-16 max-lg:size-12 rounded-full bg-[#fff]">
              <span className="block text-center max-lg:text-[16px] mt-1 text-black text-[20px] font-bold">
                {formatTime(Math.floor(TD.timeComplex))}{" "}
                <span className="text-mainColor"></span>
              </span>
              <span className="block text-[12px] max-lg:text-[9px] text-center text-gray-500">
                {TD.text}
              </span>
            </div>
        ))}
            
            
          </div>
  )
}
