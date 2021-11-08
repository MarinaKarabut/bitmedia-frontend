import PropTypes from 'prop-types'

import s from './AboutItem.module.scss'

const AboutItem = ({ title, description, image }) => {
    return (
        <li className={s.item}>
            <img src={image} alt="" className={s.item__img} />
            <h3 className={`${s.item__title} ${s.section__subtitle }`}>{title}</h3>
            <p className={`${s.item__description} ${s.section__description}`}>{description }</p>
        </li>
    )
};

export default AboutItem;

AboutItem.defaultProps = {
    title: '',
    description: '',
    image: '',
}


AboutItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}
