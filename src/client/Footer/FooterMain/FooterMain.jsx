import Logo from '../../../shared/components/Logo'
import Form from '../../Form'

import s from './FooterMain.module.scss'

const FooterMain = () => {
    return (
        <footer className={s.footer}>
            <Form/>
            <div className={s.footer__wrapper}>
                <Logo className={s.footer__logo} />
                <p className={s.footer__text}>All rights reserved by ThemeTags</p>
                <p className={s.footer__text}>Copyrights &copy; 2019.</p>
            </div>      
        </footer>
    )
};

export default FooterMain;
