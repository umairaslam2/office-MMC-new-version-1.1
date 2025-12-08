import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const MyLineChart = () => {

    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
        { name: 'Page C', uv: 500, pv: 1398, amt: 2400 },
    ];


    return (
        <ResponsiveContainer width="100%" height="80%" style={{paddingTop : "10px"}}>
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="rgb(60, 64, 160)" strokeWidth={2} name="My data series name" />
                <XAxis dataKey="name" />
                <YAxis width="auto" label={{ value: '', position: 'insideLeft', angle: -90 }} />
                {/* <Legend align="right" /> */}
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>

    )

};

export default MyLineChart;