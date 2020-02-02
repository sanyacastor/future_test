import React, { Fragment } from 'react'
import '../App.sass'


function Pagination(props) {
    return (
    <Fragment>
        <nav className="pagination" role="navigation" aria-label="pagination">
            <a href="_" className="pagination-previous" title="This is the first page" disabled>Previous</a>
            <a href="_" className="pagination-next">Next page</a>
            <ul className="pagination-list">
                <li className="pagination-link" aria-label="">
                {props.currentPage}
                </li>
                <li className="pagination-link" aria-label="">
                {props.currentPage+1}  
                </li>
    <li className="pagination-link" aria-label="">{props.lastPage}</li>
            </ul>
        </nav>
    </Fragment>
    )
    
}

export default Pagination