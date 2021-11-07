import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import s from './Chart.module.scss'

const Chart = ({ userInfo }) => {

    const { firstName, lastName, user } = userInfo
    
  
    return (
        <section className={s.section}>
            <h2 className={s.title}>{firstName} {lastName}</h2>
            <h3 className={s.subtitle}>Clicks</h3>
            <LineChart
                width={1200}
                height={300}
                data={user}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
                    type="monotone"
                    dataKey="clicks"
                    stroke="#3A80BA"
                    dot={false}
                    activeDot={{ r: 8 }}
            />
            </LineChart>
            <h3 className={s.subtitle}>Views</h3>
            <LineChart
            width={1200}
            height={300}
            data={user}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
                type="monotone"
                dataKey="page_views"
                stroke="#3A80BA"
                dot={false}
                activeDot={{ r: 8 }}
            />
            </LineChart>

        </section>
  )
}
export default Chart