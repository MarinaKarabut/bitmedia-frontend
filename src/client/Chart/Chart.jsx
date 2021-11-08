import React from 'react';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

import s from './Chart.module.scss'

class CustomizedDot extends React.Component {
    render() {

        return (
            <circle cx={16} cy={16} r={8} stroke="#3A80BA" strokeWidth={3} fill="#3A80BA" />
        );
    }
};



const Chart = ({ userInfo }) => {

    const { firstName, lastName, user } = userInfo
    
  
    return (
        <section className={s.section}>
            <h2 className={s.title}>{firstName} {lastName}</h2>
            <h3 className={s.subtitle}>Clicks</h3>
            <LineChart
                width={1200}
                height={249}
                data={user}
                margin={{
                    top:9,
                    right: 30,
                    bottom: 20,
                }}
            >
            <CartesianGrid 
                vertical={false}
                stroke="#F1F1F1"
          />
                <XAxis
                    dataKey="date"
                    stroke="#cccccc"
                    axisLine={false}
                    tickLine={false} />
            <YAxis
                    type="number"
                    domain={['dataMin', 'dataMax']}
                    ticks={[0, 200, 400, 600, 800, 1000]}
                    stroke="#cccccc"
                    axisLine={false}
                    tickLine={false}
    
                />
                <Tooltip />
                <CustomizedDot />
            <Line
                    type="monotone"
                    dataKey="clicks"
                    stroke="#3A80BA"
                    dot={false}
                    activeDot={{ r: 8 }}
                    strokeWidth={4}
            />
            </LineChart>
            <h3 className={s.subtitle}>Views</h3>
            <LineChart
            width={1200}
            height={249}
            data={user}
                margin={{
                top:5,
                right: 30,
            }}
            >
            <CartesianGrid 
                vertical={false}
                stroke="#F1F1F1"
          />
            <XAxis dataKey="date" stroke="#cccccc" axisLine={false} tickLine={false}/>
                <YAxis
                    type="number"
                    domain={['dataMin', 'dataMax']}
                    ticks={[0, 200, 400, 600, 800, 1000]}
                    stroke="#cccccc"
                    axisLine={false}
                    tickLine={false}
                />
            <Tooltip />
            <Line
                type="monotone"
                dataKey="page_views"
                stroke="#3A80BA"
                dot={false}
                activeDot={{ r: 8 }}
                strokeWidth={4}
            />
            </LineChart>

        </section>
  )
}
export default Chart