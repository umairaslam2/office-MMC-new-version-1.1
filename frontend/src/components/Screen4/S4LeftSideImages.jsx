import { useEffect, useState } from "react";
import { base_URL } from "../../utills/baseUrl";
import axios from "axios";
import ImageLoader from "../../utills/ImageLoader";
import { toast } from "react-toastify";
import { logoutUser } from "../../reduxToolKit/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NubitLogo from "../../assets/nubit logo png.png"


const S4LeftSideImages = () => {

    const [imagesData, setImagesData] = useState([]);
    const [index, setIndex] = useState(0);
      const navigate = useNavigate();
      const dispatch = useDispatch();

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


    const handleLogout = () => {
        dispatch(logoutUser());
        toast.success("Logout Successful");
        navigate("/login");
    };

    return (
        <div className="w-[70%] flex items-center justify-center relative bg-[#2b2d70] border-r-4 border-[#a4b0ff]">
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

            {/* ---- POWERED BY NUBIT ---- */}
            <div onClick={handleLogout} className=" text-white/60 absolute  bottom-2 w-full  cursor-pointer flex items-center justify-center gap-2 [@media(min-width:1920px)]:text-2xl  [@media(min-width:3000px)]:text-3xl [@media(min-width:4400px)]:text-5xl  min-[1520px]:text-[18px] ">
                {/* <div onClick={handleLogout} className="absolute cursor-pointer bottom-2 left-1/2 -translate-x-1/2 text-sm md:text-lg xl:text-xl font-semibold tracking-widest opacity-70 powered-by-text"> */}
                {/* Powered by <span className="text-[#62e2ff] font-bold">Nubit</span> */}
                Powered by <img className="w-[60px] [@media(min-width:2200px)]:w-[80px] [@media(min-width:3200px)]:w-[90px]" src={NubitLogo} alt="" />
            </div>

        </div>
    )
}

export default S4LeftSideImages