import AboutList from './components/AboutList'

import s from './About.module.scss'

const About = () => {
    return (
        <section className={`${s.section__about} ${s.container}`}>
            <h2 className={s.section__about__title}>Why <span className={s.section__about__title__accent}>small business owners <br/> love</span> AppCo?</h2>
            <p className={s.section__about__description}>Our design projects are fresh and simple and will benefit your business <br/> greatly. Learn more about our work!</p>
            <AboutList/>
        </section>
    )
};

export default About;
