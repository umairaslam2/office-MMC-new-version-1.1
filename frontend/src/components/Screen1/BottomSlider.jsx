import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BottomSlider = () => {

    const doctorsData = useSelector(state => state?.doctorSlice?.doctorsData);
    const [UpdateDoctorsData, setUpdateDoctorsData] = useState([]);
    const speedPerCard = 5; // 4 seconds per card
    const animationDuration = doctorsData?.length * speedPerCard;


    // update doctors data 
    useEffect(() => {
        if (!doctorsData?.length) return;

        const newData = doctorsData.map((doc) => {
            const schedule = doc.SCHEDULE_SUMMARY?.split(", ").map((item) => {
                // item example: "Mon(10:35-10:35)"
                const day = item.slice(0, 3); //Mon
                const timeRange = item.slice(4, -1); // "10:35-10:35"
                const [start, end] = timeRange.split("-");

                // Format using moment.js
                const start12 = moment(start, "HH:mm").format("hh:mm A");
                const end12 = moment(end, "HH:mm").format("hh:mm A");

                return {
                    day,
                    time: `${start12} - ${end12}`,
                };
            }) || [];

            return {
                ...doc,
                schedule, // add new schedule array
            };
        });

        // Set to local state
        setUpdateDoctorsData(newData);
    }, [doctorsData]);

    return (
        <div style={{ animationDuration: `${animationDuration}s` }} className="relative w-full h-[45vh] [@media(min-width:2200px)_and_(min-height:1200px)]:h-[25vh] [@media(min-width:3200px)_and_(min-height:2000px)]:h-[21vh]  animate-horizontal-scroll-d  gap-4 [@media(min-width:2200px)_and_(min-height:1200px)]:gap-6  mb-[45px] overflow-hidden flex items-center bg-gradient-to-r from-[#e0f2ff] to-[#f8fbff] border-t border-blue-200 py-6 [@media(min-width:2200px)_and_(min-height:1200px)]:py-12">
            {[...UpdateDoctorsData, ...UpdateDoctorsData]?.map((doc, i) => (
                <div
                    key={doc?.DOCTOR_ID + "-" + i}
                    className="bg-white/90 backdrop-blur-sm border h-full border-blue-100 rounded-2xl p-4 [@media(min-width:3200px)_and_(min-height:2000px)]:p-8 shadow-md flex items-center gap-4 [@media(min-width:3000px)_and_(min-height:2000px)]:gap-10 [@media(min-width:4200px)_and_(min-height:2600px)]:gap-16 hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[320px]" // min width fix for equal size cards
                >
                    <img
                        src={doc?.IMAGE}
                        alt={doc?.DOCTOR_NAME}
                        className="p-1 w-[70px] [@media(min-width:3200px)]:w-[90px] [@media(min-width:3200px)_and_(min-height:2000px)]:w-[100px] [@media(min-width:4200px)_and_(min-height:2600px)]:w-[120px] h-[70px] [@media(min-width:3200px)]:h-[90px]  [@media(min-width:3200px)_and_(min-height:2000px)]:h-[100px] [@media(min-width:4200px)_and_(min-height:2600px)]:h-[120px] rounded-full border-4 border-blue-300 shadow-sm"
                    />
                    <div className="flex flex-col [@media(min-width:2200px)_and_(min-height:1200px)]:gap-3  [@media(min-width:3200px)_and_(min-height:2000px)]:gap-4 [@media(min-width:4200px)_and_(min-height:2600px)]:gap-5">
                        <h3 className="font-bold text-[18px] [@media(min-width:3200px)]:text-[24px] [@media(min-width:3200px)_and_(min-height:2000px)]:text-[32px] capitalize text-blue-800">{doc?.DOCTOR_NAME}</h3>
                        <p className="text-[16px] [@media(min-width:3200px)]:text-[20px] [@media(min-width:3200px)_and_(min-height:2000px)]:text-[26px] text-blue-500 font-medium mb-2">{doc?.FACULTY_NAME}</p>
               
                        <div className="text-sm [@media(min-width:3200px)]:text-xl [@media(min-width:3200px)_and_(min-height:2000px)]:text-3xl  text-gray-600 grid grid-cols-2 gap-x-6 gap-y-1 rounded-1xl">
                            {doc?.schedule?.map((s, idx) => (
                                <p key={idx}>
                                    <strong>{s?.day}</strong> • {s?.time}
                                </p>
                            ))}
                        </div>

                        <p className="text-[16px] [@media(min-width:3200px)]:text-xl [@media(min-width:3200px)_and_(min-height:2000px)]:text-3xl text-gray-700 mt-1">
                            <strong className="text-blue-700">Room:</strong> {doc?.ROOMNAME}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BottomSlider