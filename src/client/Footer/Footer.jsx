import Logo from '../../shared/components/Logo'

import s from './Footer.module.scss'

const Footer =() => {
    return (
        <footer className={s.footer}>
            <div className={s.wrapper}>
                <Logo className={s.logo} />
                <p className={s.text}>All rights reserved by ThemeTags</p>
                <p className={s.text}>Copyrights &copy; 2019.</p>
            </div>      
        </footer>
    )
};

export default Footer;
