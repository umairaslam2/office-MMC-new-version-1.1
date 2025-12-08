import { useEffect, useState } from "react";


const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="text-right">
            <div className="text-3xl 2xl:text-4xl [@media(min-width:2000px)]:text-[40px] [@media(min-width:3000px)]:text-[47px] [@media(min-width:4400px)]:text-[65px] font-mono font-semibold text-[#00b0ff] drop-shadow">
                {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
            <div className="text-md 2xl:text-lg [@media(min-width:2000px)]:text-2xl [@media(min-width:4400px)]:text-4xl  text-[#a7c8e8]">
                {time.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })}
            </div>
        </div>
    );
};

export default Clock
