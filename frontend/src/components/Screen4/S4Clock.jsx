import moment from "moment";
import { useEffect, useState } from "react";


const S4Clock = () => {

    const [time, setTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => setTime(moment()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-[#1a1f5f] text-center mt-4 py-3 px-4 rounded-full shadow-md">
      <p className="text-xs md:text-base xl:text-lg font-semibold">
        {time.format("ddd Do / MMM / YYYY")}
      </p>

      <p className="text-lg md:text-3xl xl:text-4xl font-bold">
        {time.format("hh:mm:ss a")}
      </p>
    </div>
  );
};

export default S4Clock;