import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';


import { getOneUser } from '../../../redux/users/users-operations';


import Footer from '../../Footer';
import Header from '../../Header'
import Navigation from '../../Navigation'
import Chart from '../../Chart'

import s from "./OneUserPage.module.scss"

const OneUserPage = () => {
    const { id } = useParams()

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getOneUser(id))
    }, [dispatch, id]);
  
    
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



