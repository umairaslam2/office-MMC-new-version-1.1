import axios from "axios";
import { memo, useEffect, useState } from "react";
import { base_URL } from "../../utills/baseUrl";
import { motion } from "framer-motion";

const TopHeadline = () => {

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
        <div className="absolute top-0 w-full bg-gray-800 py-2 [@media(min-width:2200px)_and_(min-height:1200px)]:py-4 [@media(min-width:3200px)_and_(min-height:2000px)]:py-8 overflow-hidden z-20 border-b border-gray-300">
            <motion.div
                animate={{ x: ["100%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="text-lg  [@media(min-width:3200px)_and_(max-height:2000px)]:text-2xl  [@media(min-width:3200px)_and_(min-height:2000px)]:text-4xl font-semibold whitespace-nowrap text-center flex text-white/60 "
            >
                🌟 {headlinesData?.UPPERHEADLINE}🌟
            </motion.div>
        </div>
    )
}

export default memo(TopHeadline)