import PropTypes from 'prop-types'

import Logo from '../../shared/components/Logo'

import s from './Header.module.scss'

function Header({className}) {
    return (
        <header className={`${s.header} ${className}`}>
            <Logo />
        </header>
    )
};

export default Header;

Header.defaultProps = {
    className: '',
}


Header.propTypes = {
    className: PropTypes.string,
}
