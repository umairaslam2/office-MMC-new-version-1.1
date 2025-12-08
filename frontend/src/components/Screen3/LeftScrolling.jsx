import { useEffect, useState } from "react";
import { base_URL } from "../../utills/baseUrl.js";
import axios from "axios";
import ImageLoader from "../../utills/ImageLoader.jsx";

const S3LeftScrolling = () => {
    const [imagesData, setImagesData] = useState([]);
    const [index, setIndex] = useState(0);

    // get screen 3 data
    useEffect(() => {
        const foo = async () => {
            try {
                const res = await axios.get(`${base_URL}/api/screen3images/manage`);
                const newData = res.data.data.map((item) => item?.IMAGE);
                setImagesData(newData);
            } catch (err) { }
        };
        foo();
    }, []);

    // Image rotation
    useEffect(() => {
        if (imagesData.length === 0) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % imagesData.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [imagesData]);

    return (

        <div className="w-[65%] relative p-6">
            {
                imagesData[index] ?
                    <>
                        <img
                            src={imagesData[index]}
                            alt="Hospital"
                            className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                            key={index}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white drop-shadow-lg">
                            <h2 className="
                   text-4xl font-bold mb-1
                   [@media(min-width:3200px)]:text-5xl
                   [@media(min-width:4400px)]:text-6xl
                         ">
                                Modern Medical Excellence
                            </h2>
                            <p className="
                  text-lg text-[#cde7ff]
                  [@media(min-width:3200px)]:text-2xl
                  [@media(min-width:4400px)]:text-3xl
                 ">
                                Compassion • Technology • Expertise
                            </p>
                        </div>
                    </>
                    :
                    // Loading Animation
                    <ImageLoader />

            }
        </div>
    );
};

export default S3LeftScrolling;
