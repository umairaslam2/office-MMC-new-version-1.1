import { memo } from "react"


const DoctorCard = ({doctorName , doctorDesignation , img}) => {
    return (
        <div className="flex gap-4 p-2 border border-gray-200">
            <div className="w-[50px] h-[40px] rounded-[10px] overflow-hidden">
                <img className="w-full h-full" src={img} alt="Doctor Img" />
            </div>

            <div>
                <h3>{doctorName}</h3>
                <p>{doctorDesignation}</p>
            </div>
        </div>
    )
}

export default memo(DoctorCard)