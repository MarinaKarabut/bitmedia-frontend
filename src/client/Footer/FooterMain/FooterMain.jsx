import Logo from '../../../shared/components/Logo'
import Form from '../../Form'

import s from './FooterMain.module.scss'

const FooterMain = () => {
    return (
        <footer className={s.footer}>
            <Form/>
            <div className={s.wrapper}>
                <Logo className={s.logo} />
                <p className={s.text}>All rights reserved by ThemeTags</p>
                <p className={s.text}>Copyrights &copy; 2019.</p>
            </div>      
        </footer>
    )
};

export default FooterMain;
