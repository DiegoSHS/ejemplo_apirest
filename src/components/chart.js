import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export const ChartData = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" aspect={2} height="100%">
            <LineChart data={data}>
                <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
                <XAxis dataKey="date" />
                <YAxis />
            </LineChart>
        </ResponsiveContainer>
    )
}