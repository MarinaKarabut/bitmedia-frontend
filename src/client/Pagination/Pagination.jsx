import PropTypes from 'prop-types'

import { v4 } from 'uuid'

import { ReactComponent as ArrowRight } from '../../images/pagination/arrowR.svg';
import { ReactComponent as ArrowLeft } from '../../images/pagination/arrowL.svg';

import s from "./Pagination.module.scss";

const Pagination = ({ currentPage, showPage, showNextPage, limit = 50 }) => {
    const totalPages = Math.ceil(1000 / limit)

    const pageElements = new Array(totalPages).fill("").map((_, idx) => 
        <li key={v4()} className={(currentPage === idx + 1) ? s.itemActive : s.item} onClick={(e) => showPage(e, idx + 1)}>{idx + 1}</li>);
    
    const showPages = () => {
		if (currentPage === 1 || currentPage === 2) {
			return pageElements.slice(0, 5)
		} else if (currentPage === totalPages || currentPage === totalPages - 1) {
			return pageElements.slice(totalPages - 5, totalPages)
		} else {
			return pageElements.slice(currentPage - 3, currentPage + 2)
		}
	}

    return (
        <ul className={s.list}>
            {currentPage !== 1 && <ArrowLeft className={s.arrow} onClick={(e) => showNextPage(e, -1)}/>}
            {showPages()}
            { currentPage !==20  &&  <ArrowRight onClick={(e)=> showNextPage(e, 1)} className={s.arrow}/>}
        </ul>
    )
}

export default Pagination;

Pagination.defaultProps = {
    currentPage: null,
    showPage: () => { },
    showNextPage: () => { },
}


Pagination.propTypes = {
    currentPage: PropTypes.number,
    limit: PropTypes.number,
    showPage: PropTypes.func,
    showNextPage: PropTypes.func,
}
