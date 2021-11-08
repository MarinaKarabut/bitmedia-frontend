import { shallowEqual, useSelector } from 'react-redux';


import Footer from '../../Footer';
import Header from '../../Header'
import Navigation from '../../Navigation'
import Chart from '../../Chart'

import s from "./OneUserPage.module.scss"

const OneUserPage = () => {
    const userInfo = useSelector(state => state.users.user, shallowEqual);

    const { firstName, lastName } = userInfo
    
    

    return (
        <>
            <Header className={s.header} />
            <div className={ s.wrapper }>
                <Navigation />
                <p className={ s.name }>{firstName} {lastName}</p>
            </div>
            <Chart userInfo={ userInfo }/>
            <Footer/>
        </>
    )
};

export default OneUserPage;



