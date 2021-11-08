import PropTypes from 'prop-types'
import  CalendarComponent from '../CalendarComponent'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    
} from "recharts";

import s from './Chart.module.scss'


const Chart = ({ userInfo }) => {

    const { firstName, lastName, days } = userInfo

    
    return (
        <section className={`${s.section} ${s.section__charts}`}>
            <div className={s.wrapper}>
                <h2 className={s.section__title}>{firstName} {lastName}</h2>
                <CalendarComponent/>
            </div>
            
            <h3 className={s.section__subtitle}>Clicks</h3>
                
            <div className={s.chart__container}>
                <LineChart
                    width={1200}
                    height={249}
                    data={days}
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
                <Line
                    type="monotone"
                    dataKey="clicks"
                    stroke="#3A80BA"
                    dot={false}
                    activeDot={{ r: 8 }}
                    strokeWidth={4}
                />
                </LineChart>
            </div>
            <h3 className={s.section__subtitle}>Views</h3>
            <div className={s.chart__container}>
                <LineChart
                    width={1200}
                    height={249}
                    data={days}
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
            </div>

        </section>
  )
}
export default Chart

Chart.defaultProps = {
    userInfo: {},
}


Chart.propTypes = {
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        days: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            clicks: PropTypes.number,
            page_views: PropTypes.number,
            date: PropTypes.string
        }))
}
