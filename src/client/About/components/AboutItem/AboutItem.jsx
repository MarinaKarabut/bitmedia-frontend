

import s from './AboutItem.module.scss'

const AboutItem = ({ title, description, image }) => {
    return (
        <li className={s.item}>
            <img src={image} alt="" className={s.item__img} />
            <h3 className={s.item__title}>{title}</h3>
            <p className={s.item__description}>{description }</p>
        </li>
    )
};

export default AboutItem;
