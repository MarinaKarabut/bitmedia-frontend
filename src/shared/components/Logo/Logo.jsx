import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import routes from '../../../App/routes'

import s from './Logo.module.scss'

const Logo = ({ className }) => {
    
    return (
            <Link to={routes.main} className ={`${s.logo} ${className}`}>AppCo</Link>
    )
}

export default Logo

Logo.defaultProps = {
    className: '',
}

 Logo.propTypes = {
    className: PropTypes.string,
}
