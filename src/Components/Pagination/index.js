import React from 'react';
import { Button } from 'antd';

function Pagination({
  currentPage,
  paginate,
  total,
  itemsPerPage,
  listLength,
}) {
  let numbers = [];

  for (let i = 0; i < total; i++) {
    numbers.push(i);
  }

  const nextPageHandler = () => {
    let page = currentPage >= total ? currentPage : currentPage + 1;
    paginate(page);
  };

  const prevPageHandler = () => {
    let page = currentPage <= 1 ? currentPage : currentPage - 1;
    paginate(page);
  };

  return listLength >= itemsPerPage ? (
    <>
      <nav className="pagination" role="navigation" aria-label="pagination">
        <Button style={{ margin: '1em' }} onClick={prevPageHandler}>
          Назад
        </Button>
        <span style={{ margin: '0 1em' }}>
          {currentPage}/{numbers.length}
        </span>
        <Button style={{ margin: '1em' }} onClick={nextPageHandler}>
          Дальше
        </Button>
      </nav>
    </>
  ) : null;
}

export default Pagination;
