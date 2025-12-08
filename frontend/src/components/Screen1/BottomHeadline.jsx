import axios from "axios";
import { memo, useEffect, useState } from "react";
import { base_URL } from "../../utills/baseUrl";
import { motion } from "framer-motion";
import NubitLogo from "../../assets/nubit-logo.png"

const BottomHeadline = () => {

    const [headlinesData, setHeadlinesData] = useState([]);


    // get headlines
    useEffect(() => {

        const foo = async () => {
            try {
                const res = await axios.get(`${base_URL}/api/headline/manage`);
                // console.log(res, "res of get headlines");
                setHeadlinesData(res.data.data[0]);
            }
            catch (err) {
                // console.log(err, "error in get headlines");
                // toast.error(err?.message)
            }
        }
        foo()

    }, [])

    return (
        <div className="absolute bottom-0 w-full bg-gray-800 py-2 [@media(min-width:2200px)_and_(min-height:1200px)]:py-4 [@media(min-width:3200px)_and_(min-height:2000px)]:py-8 overflow-hidden z-20 border-t border-gray-400 ">
            <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="text-lg    [@media(min-width:3200px)_and_(max-height:2000px)]:text-2xl  [@media(min-width:3200px)_and_(min-height:2000px)]:text-4xl font-semibold whitespace-nowrap flex text-center text-white/60"
            >
                <div className=" text-white/60 [@media(min-width:1920px)]:text-xl   [@media(min-width:3200px)_and_(max-height:2000px)]:text-2xl  [@media(min-width:3200px)_and_(min-height:2000px)]:text-3xl min-[1520px]:text-[18px] mr-[50%]">
                    Powered by <span className="text-[#00b0ff] font-bold">nubit</span>
                    {/* <img  src={NubitLogo} alt="nubit" /> */}
                </div>
                💙 {headlinesData?.LOWERHEADLINE} 💙
            </motion.div>
        </div>
    )
}

export default memo(BottomHeadline)



// [@media(min-width:2200px)]:w-[290px] [@media(min-width:3200px)_and_(min-height:1000px)]:w-[340px] [@media(min-width:3200px)_and_(min-height:1550px)]:w-[420px] [@media(min-width:4200px)]:w-[540px] 
//                          h-[300px] [@media(min-width:2200px)]:h-[380px] [@media(min-width:3200px)_and_(min-height:1000px)]:h-[420px] [@media(min-width:3200px)_and_(min-height:1550px)]:h-[520px] [@media(min-width:4200px)]:h-[680px]