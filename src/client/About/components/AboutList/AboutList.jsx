import { v4 } from 'uuid'

import about from '../../../../helpers/about'

import AboutItem from '../AboutItem'

import s from './AboutList.module.scss'

const AboutList = () => {
    const aboutEl = about.map(el => <AboutItem key={v4()}  {...el} />)
    
    return (
        <ul className={s.list}>{ aboutEl }</ul>
    )
};

export default AboutList;
