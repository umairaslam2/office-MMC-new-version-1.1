
import { memo } from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Dashboard = () => {
  return (
    <div className='flex flex-col justify-between gap-5 xl:flex-row max-h-[140vh]  pb-2'>

      <LeftSide />
      <RightSide />

    </div>
  )
}

export default memo(Dashboard)