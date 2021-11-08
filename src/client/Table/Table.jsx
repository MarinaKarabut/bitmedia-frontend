import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import {Link} from 'react-router-dom'

import s from './Table.module.scss'

function Table({ users }) {
    const tableEl = users.map(({ id, first_name, last_name, email, gender, ip_address, total_clicks,total_page_views }) => (
          <tr key = { v4() } >
            <td><Link to={`/user/${id}`} className={s.link}>{id}</Link></td>
            <td><Link to={`/user/${id}`} className={s.link}>{first_name}</Link></td>
            <td><Link to={`/user/${id}`} className={s.link}>{last_name}</Link></td>
            <td><Link to={`/user/${id}`} className={s.link}>{email}</Link></td>
            <td><Link to={`/user/${id}`} className={s.link}>{gender}</Link></td>
            <td><Link to={`/user/${id}`} className={s.link}>{ip_address}</Link></td>
            <td><Link to={`/user/${id}`} className={s.link}>{total_clicks}</Link></td>
            <td><Link to={`/user/${id}`} className={s.link}>{total_page_views}</Link></td>
        </tr >))
    return (
        <section className="transactions">
            <div className={s.table__container}>
             <table className={s.table}>
                <thead className={s.thead}>
                    <tr>
                        <th>Id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>IP address</th>
                        <th>Total clicks</th>
                        <th>Total page views</th>
                    </tr>
                </thead>
                <tbody className={s.tbody}>
                    {tableEl}
                </tbody>
            </table>   
            </div>
            
        </section>
    )
};

export default Table;

Table.defaultProps = {
    users:[]

}


Table.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string,
        gender: PropTypes.string,
        ip_address: PropTypes.string,
        total_clicks: PropTypes.number,
        total_page_views: PropTypes.number   
}))
}

