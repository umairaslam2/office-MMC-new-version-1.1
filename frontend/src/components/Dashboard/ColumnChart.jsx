import { memo } from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';


const ColumnChart = () => {

    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
        { name: 'Page C', uv: 500, pv: 1398, amt: 2400 },
        { name: 'Page D', uv: 100, pv: 1398, amt: 2400 },
    ];

    return (
        <ResponsiveContainer width="100%" height="80%" style={{padding : "10px"}}>
            <BarChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" padding={{ left: 0, right: 0 }} />
                <YAxis  tickMargin={2} width={30} />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                {/* <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="uv" fill="#8884d8" barSize={30} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default memo(ColumnChart)



