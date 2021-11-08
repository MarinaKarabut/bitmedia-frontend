import { Link } from 'react-router-dom'

import Button from '../../shared/components/Button'

import iphone from '../../images/hero/iPhoneX.png'
import routes from '../../App/routes'

import s from './Hero.module.scss'




const Hero = () => {
    return (
        <section className={`${s.hero} ${s.section}`}>
            <div className={s.wrapper}>
                <div>
                    <h1 className={s.hero__title}><span className={s.hero__title__accent}>Brainstorming</span> for <br/> desired perfect Usability</h1>
                    <p className={`${s.hero__description} ${s.section__description}`}>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                    <Button ><Link to={routes.users} className={s.link}>Views Stats</Link></Button>
                </div>
                <div>
                    <img src={iphone} alt="iPhone" className={ s.img}/>
                </div>
            </div>   
        </section>
        
    )
};

export default Hero;


