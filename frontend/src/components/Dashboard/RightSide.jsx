import { memo, useEffect, useState } from "react"
import MyLineChart from "./LineChart"
import DoctorCard from "./DoctorCard"


const RightSide = () => {


  const doctorsData = [
    {
      id: 1,
      doctorName: "Dr. Ahsan Ali",
      doctorDesignation: "Cardiologist",
      img: "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      doctorName: "Dr. Sara Khan",
      doctorDesignation: "Dermatologist",
      img: "https://images.pexels.com/photos/8460154/pexels-photo-8460154.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      doctorName: "Dr. Usman Tariq",
      doctorDesignation: "Orthopedic Surgeon",
      img: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      doctorName: "Dr. Hina Fatima",
      doctorDesignation: "Gynecologist",
      img: "https://images.pexels.com/photos/8460158/pexels-photo-8460158.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      doctorName: "Dr. Ahmed Raza",
      doctorDesignation: "Neurologist",
      img: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      doctorName: "Dr. Maria Iqbal",
      doctorDesignation: "Pediatrician",
      img: "https://images.pexels.com/photos/8460155/pexels-photo-8460155.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 7,
      doctorName: "Dr. Bilal Sheikh",
      doctorDesignation: "Psychiatrist",
      img: "https://images.pexels.com/photos/3825521/pexels-photo-3825521.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 8,
      doctorName: "Dr. Sana Javed",
      doctorDesignation: "ENT Specialist",
      img: "https://images.pexels.com/photos/5452290/pexels-photo-5452290.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 9,
      doctorName: "Dr. Imran Baig",
      doctorDesignation: "Urologist",
      img: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 10,
      doctorName: "Dr. Zoya Malik",
      doctorDesignation: "Oncologist",
      img: "https://images.pexels.com/photos/3825523/pexels-photo-3825523.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];


  return (
    <div className="themeBoxShadow flex-3 flex flex-col p-2 gap-5">

      <div className='border-none  outline-none w-full h-[280px] [@media(min-width:450px)]:h-[400px] p-1'>
      {/* <div className='border-none  outline-none w-full h-[280px] xxs:h-[400px] p-1'> */}
        <div className='flex items-center border-b text-gray-500 border-gray-300 text-[18px] text-light pt-0 p-3 h-[20%] font-medium'>
          Patient Strength
        </div>

        <MyLineChart />
      </div>

      <iframe
        width="100%"
        src="https://www.youtube.com/embed/r06kDev9D1s?autoplay=1&mute=1&loop=1&playlist=r06kDev9D1s"
        title="Hospital (place) - Kids vocabulary - Learn English for kids - English educational video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="h-[250px] [@media(min-width:450px)]:h-[350px]"
        // className="h-[250px] customeHeight"
      ></iframe>

      <div className="custom-scrollbar flex flex-col w-full border-1 border-gray-300 rounded-[10px]  xl:h-auto overflow-y-scroll">

        <div className="flex flex-col border-b-1 border-gray-300 justify-center p-4">
          <h2 className="text-2xl">Doctors List</h2>
          <p className="text-[18px] text-gray-400">Today</p>
        </div>

        <div className="flex flex-col justify-center gap-4 p-4">
          {
            doctorsData.map((item) => <DoctorCard key={item.id} doctorName={item.doctorName} doctorDesignation={item.doctorDesignation} img={item.img} />)
          }
        </div>

      </div>

    </div>
  )
}

export default memo(RightSide)