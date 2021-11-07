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
        <section className ="transactions">
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
        </section>
    )
};

export default Table;
