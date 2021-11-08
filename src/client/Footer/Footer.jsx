import Logo from '../../shared/components/Logo'

import s from './Footer.module.scss'

const Footer =() => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__wrapper}>
                <Logo className={s.footer__logo} />
                <p className={s.footer__text}>All rights reserved by ThemeTags</p>
                <p className={s.footer__text}>Copyrights &copy; 2019.</p>
            </div>      
        </footer>
    )
};

export default Footer;
