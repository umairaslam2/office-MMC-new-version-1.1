import { useEffect, useState } from "react";
import { base_URL } from "../../utills/baseUrl";
import axios from "axios";
import ImageLoader from "../../utills/ImageLoader";


const S4LeftSideImages = () => {

    const [imagesData, setImagesData] = useState([]);
    const [index, setIndex] = useState(0);

    // console.log("imagesData in screen 5:", imagesData);
    // console.log("index in screen 5:", index);


    // get screen 4 data
    useEffect(() => {

        const foo = async () => {
            try {
                const res = await axios.get(`${base_URL}/api/screen4images/manage`);
                // console.log(res, "res of get screen1Data");
                const newData = res.data.data.map((item) => item?.IMAGE);
                setImagesData(newData);
            }
            catch (err) {
                // console.log(err, "error in get screen1Data");
                // toast.error(err?.message)
            }
        }
        foo()

    }, [])

    // Image rotation
    useEffect(() => {
        if (imagesData.length === 0) return; // wait until images load

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % imagesData.length);
        }, 7000);

        return () => clearInterval(timer);
    }, [imagesData]);


    return (
        <div className="w-[70%] flex items-center justify-center bg-[#2b2d70] border-r-4 border-[#a4b0ff]">
            {
                imagesData[index] ?
                    <>
                        <div className="w-[90%] h-[85%] border-4 border-white rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src={imagesData[index]}
                                alt="Hospital"
                                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                            />
                        </div>
                    </>
                    :
                    // Loading Animation
                    <ImageLoader />

            }
        </div>
    )
}

export default S4LeftSideImages