import {useEffect, useState} from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import Footer from '../../Footer'
import Header from '../../Header'
import Navigation from '../../Navigation/Navigation';
import Table from '../../Table'
import Pagination from '../../Pagination'

import {getAllUsers} from '../../../redux/users/users-operations'

import s from './UsersPage.module.scss'

const UsersPage = () => {
    const allUsers = useSelector(state => state.users.users, shallowEqual)

    const [page, setPage] = useState(1)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllUsers(page))
    }, [dispatch, page])
    
    const loadNewPage = (e, idx) => {
        e.preventDefault();
        setPage(idx)
    }


    const loadNextPage = (e, value) => {
        e.preventDefault();
        setPage(page + value)
    }


    return (
        <>
            <Header className={s.header} />
            <Navigation />
            <section className={s.section}>
                <h2 className ={s.title}>Users statistics</h2>
                <Table users={allUsers} />
                <Pagination currentPage={page} showPage={loadNewPage} showNextPage={loadNextPage} />
            </section>
            <Footer />
        </>)
};

export default UsersPage;


