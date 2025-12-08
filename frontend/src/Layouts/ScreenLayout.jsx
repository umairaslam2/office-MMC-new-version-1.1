import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import NavImg from "../assets/MMC logo.png";
import { UserOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import moment from "moment";


const ScreenLayout = () => {
  // const ScreenLayout = ({ children }) => {
    const [time, setTime] = useState('');
    const { Header, Content } = Layout;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format('MMM Do YYYY, h:mm:ss a'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <Layout style={{ height: "100vh", backgroundColor: "#f5f5f5" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#001529",
          color: "#fff",
          position: "relative",
          padding: "35px 50px"
        }}
      >

        <img
          src={NavImg}
          alt="logo"
          style={{ borderRadius: "50%" }}
          className='w-15 h-12 sm:h-13 sm:w-20'
        />


        <h1 style={{ color: "red", margin: 0, fontSize: "25px" }} className='hidden sm:block'>
          Memon Medical Complex
        </h1>

        <div className='flex gap-x-4 items-center'>
          <div className="hidden lg:flex border-[1px] h-[45px] text-[12px] sm:text-[14px] w-fit rounded-[100%] p-4 items-center justify-center" id="dateAndTime">
            {time}
          </div>

          <div className="flex gap-x-2 text-[18px] sm:text-[20px]">
            <span >Screen</span>
            <UserOutlined style={{ fontSize: "25px", color: "white" }} />
          </div>
        </div>

      </Header>


      <Content
        style={{
          padding: "0", // 🔹 YAHAN CHANGE - padding 0 kardia
          background: "white",
          height: "100%",
          overflowY: "auto",
        }}
      >
        <Outlet />
        {/* {children}   <--   bhai jab bhi route bases pages show kar ne hen tpo hamen poulet use kar na per he ga kio {Children} route based nahi is compoent ke children me jo bhi ho ga wo dekhane ka paband he na ke rout ke hisaab se    */}
      </Content>
    </Layout>
  );
};

export default ScreenLayout;
