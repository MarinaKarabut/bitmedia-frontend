import { Link } from 'react-router-dom'

import Button from '../../shared/components/Button'

import iphone from '../../images/hero/iPhoneX.png'
import routes from '../../App/routes'

import s from './Hero.module.scss'




const Hero = () => {
    return (
        <section className={`${s.hero} ${s.container}`}>
            <div className={s.wrapper}>
                <div>
                    <h1 className={s.hero__title}><span className={s.title__accent}>Brainstorming</span> for <br/> desired perfect Usability</h1>
                    <p className={s.hero__description}>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                    <Link to={routes.users}>
                        <Button>Views Stats</Button>
                    </Link>
                </div>
                <div>
                     <img src={iphone} alt="iPhone" />
                </div>
            </div>   
        </section>
        
    )
};

export default Hero;


