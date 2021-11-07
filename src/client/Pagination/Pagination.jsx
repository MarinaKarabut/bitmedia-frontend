import { v4 } from 'uuid'

import { ReactComponent as ArrowRight } from '../../images/pagination/arrowR.svg';
import { ReactComponent as ArrowLeft } from '../../images/pagination/arrowL.svg';

import s from "./Pagination.module.scss";

const Pagination = ({currentPage, showPage, showNextPage, totalPage = 5})=>{
    const pageElements = new Array(totalPage).fill("").map((_, idx) => 
        <li key={ v4()} className={(currentPage === idx + 1) ? s.itemActive : s.item} onClick={(e) => showPage(e, idx + 1)}>{idx + 1}</li>);

    return (
        <ul className={s.list}>
            {currentPage !== 1 && <ArrowLeft className={s.arrow} onClick={(e) => showNextPage(e, -1)}/>}
            {pageElements}
            { currentPage !==20  &&  <ArrowRight onClick={(e)=> showNextPage(e, 1)} className={s.arrow}/>}
        </ul>
    )
}

export default Pagination;