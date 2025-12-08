import { memo } from "react"

const TotalCard = ({img , digit , text}) => {
    return (
        <div className='themeBoxShadow flex-1 flex items-center justify-between p-4 lg:p-2'>
            <img className='w-[130px] sm:w-[100px]   xl:w-[120px]  2xl:w-[150px]' src={img} alt="" />

            <div className=" flex flex-col items-center">
                <h1 className='text-center text-[18px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[18px] 2xl:text-[20px]'>{text}</h1>
                <h2 className='font-semibold text-[18px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[18px] 2xl:text-[24px]'>{digit}</h2>
            </div>
        </div>
    )
}

export default memo(TotalCard)