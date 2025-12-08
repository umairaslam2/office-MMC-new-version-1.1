import { UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import doctorImg from "../assets/doctor.png"
import NubitLogo from "../assets/nubit-logo.png"
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { base_URL } from '../utills/baseUrl';
import { useDispatch } from 'react-redux';
import { loginUser } from '../reduxToolKit/authSlice';
import { jwtDecode } from "jwt-decode";




const LoginPage = () => {

  const [inputs, setInputs] = useState({})
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value })
  }

  const loginHandler = async () => {

    if (!inputs?.username || !inputs?.password) {
      toast.info("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${base_URL}/api/auth/login`, inputs);
      // console.log(res, "res <<<<<<<<<<<");
      const token = res.data.token;
      const decoded = jwtDecode(token);

      localStorage.setItem("loginUserData", JSON.stringify(decoded))
      localStorage.setItem("loginUser", JSON.stringify(token));
      dispatch(loginUser(decoded));
      setLoading(false);
      
      if (decoded.role === "admin") {
        navigate("/");
      }
      else {
        const screenAccessMap = {
          "001Screen1": "/screen1display",
          "002Screen2": "/screen2display",
          "003Screen3": "/screen3display",
          "004Screen4": "/screen4display",
        };

        navigate(screenAccessMap[decoded.username] || "/login");
      }
      toast.success(res?.data?.message);
    }
    catch (err) {
      // console.log(err, "error");
      setLoading(false);
      toast.error(err?.response?.data?.message);
    }


  }

  return (
    <div className="relative h-[100vh] w-[100%] flex justify-center items-center ">

      {/* <h1 className="absolute top-0 p-2 text-[50px] font-bold text-white bg-[#01A7B5]">Welcome Back</h1> */}
      <h1
        className="absolute top-14 text-[40px] sm:text-[45px] md:text-[50px] font-bold bg-[linear-gradient(to_right,white_0%,white_30%,#a1e5ec_50%,#01A7B5_100%)] bg-clip-text text-transparent"
      >
        Welcome Back
      </h1>

      {/* <h1 className="absolute top-4 text-[50px] font-bold bg-[linear-gradient(to_right,white_50%,#01A7B5_50%)] bg-clip-text text-transparent"> Welcome Back </h1> */}

      <div className="w-[50%] h-[100%] bg-[#01A7B5] flex items-center justify-end">

        <div className="flex flex-col justify-between absolute left-5 sm:static  items-start p-6 h-[50%] w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] bg-white shadow-[6px_0_20px_black]">

          <div className='w-full text-center'>
            <h1 className='text-[40px] font-medium text-[#01A7B5]'>Hospital</h1>
            <h3 className='text-[20px] text-gray-600'>Management System</h3>
          </div>

          <div className='w-[100%] text-[18px]'>
            <label htmlFor="userName">User Name</label>
            <Input
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  loginHandler();
                }
              }}
              required
              style={{ fontSize: "18px", marginTop: "8px" }} onChange={inputHandler} id='username' placeholder="User Name" />
          </div>

          <div className='w-[100%] text-[18px]'>
            <label htmlFor="password">Password</label>
            <Input.Password
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  loginHandler();
                }
              }}
              required
              style={{ fontSize: "18px", marginTop: "8px" }} onChange={inputHandler} id='password' placeholder="Input password" />
          </div>

          <Button
            onClick={loginHandler}
            style={{
              backgroundColor: "#01A7B5",
              color: "white",
              border: "none",
              fontSize: "18px",
              padding: "18px"
            }}
            block
            disabled={loading}
            loading={loading}>{!loading && "Login"}</Button>

          <h1 className='text-[#01A7B5]'>Powered By Nubit Software</h1>

        </div>

      </div>

      <div className="w-[50%] h-[100%] bg-[#F3F3F3] flex items-center justify-start">

        <div className="hidden sm:flex   justify-center items-center p-4 h-[50%] w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] bg-[#E3FDFF] shadow-[12px_4px_20px_0_rgba(0,0,0,0.3)]">
          <img src={doctorImg} alt="" />
        </div>

      </div>

      <img className='absolute bottom-6 right-4 w-[60px] sm:w-[70px]' src={NubitLogo} alt="NubitLogo" />

    </div>
  )
}

export default LoginPage