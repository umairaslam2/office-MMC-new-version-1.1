import { memo } from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const MyCircleChart = () => {


    return (

        <ResponsiveContainer width="100%" height="80%" >
            <PieChart >
                <Pie
                    activeShape={{
                        fill: '#d3d3d3',
                    }}
                    data={[
                        { name: 'Page A', uv: 590, fill: "#8884d8" },
                        { name: 'Page B', uv: 590, fill: "yellow" },
                        { name: 'Page C', uv: 868, fill: "brown" },
                        { name: 'Page d', uv: 168, fill: "gray" },
                    ]}
                    dataKey="uv"
                />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>

    )
}

export default memo(MyCircleChart)

