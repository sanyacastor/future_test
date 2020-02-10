import React, { Fragment } from 'react'
import { Button } from 'antd';


function Pagination({currentPage, paginate, total}) {

let numbers = []

for(let i =0; i<total; i++) {
    numbers.push(i)
}

const nextPageHandler = () => {
    let page = currentPage >= total ?  currentPage : currentPage+1
    paginate(page)
}

const prevPageHandler = () => {
    let page = currentPage <= 1 ?  currentPage : currentPage-1
    paginate(page)
}

    return (
    <Fragment>
        <nav className="pagination" role="navigation" aria-label="pagination">
            {/* {numbers.map((n)=> <Button className={currentPage===n+1 ? 'active': ''} key={n} onClick={()=>paginate(n+1)}>{n+1}</Button>)} */}
            <Button style={{margin: '1em'}} onClick={prevPageHandler}>Назад</Button>
                <span style={{margin: '0 1em'}}>{currentPage}/{numbers.length}</span>
            <Button style={{margin: '1em'}} onClick={nextPageHandler}>Дальше</Button>
        </nav>
        
    </Fragment>
    )
}

export default Pagination