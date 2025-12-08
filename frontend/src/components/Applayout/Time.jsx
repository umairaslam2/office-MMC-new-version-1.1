import moment from "moment";
import { useEffect, useState } from "react";

const Time = () => {

    const [time, setTime] = useState('');


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment().format('MMM Do YYYY, h:mm:ss a'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="hidden lg:flex border-[1px] h-[45px] text-[12px] sm:text-[14px] w-fit rounded-[100%] p-4 items-center justify-center" id="dateAndTime">
            {time}
        </div>
    )
}

export default Time