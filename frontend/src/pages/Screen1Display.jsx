import { LoginOutlined } from "@ant-design/icons";
import "./Screen1Display.css"
import LeftImageSlider from "../components/Screen1/LeftImageSlider";
import RightSideSlider from "../components/Screen1/RightSideSlider";
import BottomSlider from "../components/Screen1/BottomSlider";
import TopHeadline from "../components/Screen1/TopHeadline";
import BottomHeadline from "../components/Screen1/BottomHeadline";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../reduxToolKit/authSlice";
import { toast } from "react-toastify";



const Screen1Display = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Logout Successful");
    navigate("/login");
  };

  return (

    <div className="relative h-screen w-full bg-[#b1b2b641] text-gray-800 overflow-hidden flex flex-col">

      <div onClick={handleLogout} className="absolute right-4 bottom-1 z-50 px-3 py-1 
                bg-gradient-to-r from-blue-500 to-blue-600 
                text-white rounded-xl shadow-md 
                hover:from-blue-600 hover:to-blue-700 
                transition-all duration-300 cursor-pointer">
        <LoginOutlined />
      </div>


      {/* ===== TOP MARQUEE ===== */}
      <TopHeadline />

      {/* ===== MAIN SECTION ===== */}
      <div className="flex flex-row  justify-center items-center w-full h-[75%] pt-16 mb-6 ">

        {/* ===== CENTER IMAGE SLIDESHOW (70%) ===== */}
        <LeftImageSlider />

        {/* ===== RIGHT SIDE FACULTY (30%) ===== */}
        <RightSideSlider />

      </div>

      {/* ===== BOTTOM DOCTOR CARDS (INFINITE LEFT → RIGHT LOOP) ===== */}
      <BottomSlider />

      {/* ===== BOTTOM MARQUEE ===== */}
      <BottomHeadline />

    </div>
  );
};

export default Screen1Display;


