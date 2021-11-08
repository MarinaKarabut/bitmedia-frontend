import AboutList from './components/AboutList'

import s from './About.module.scss'

const About = () => {
    return (
        <section className={`${s.section__about} ${s.section}`}>
            <h2 className={`${s.section__about__title} ${s.section__title}`}><span className={s.title__accent}>Why</span> small business owners <br/> love <span className={s.title__accent}>AppCo?</span></h2>
            <p className={s.section__description}>Our design projects are fresh and simple and will benefit your business <br/> greatly. Learn more about our work!</p>
            <AboutList/>
        </section>
    )
};

export default About;
