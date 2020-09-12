import React, { useState } from 'react';
import { Input } from 'antd';
const { Search } = Input;

function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');
  const valueChangeHandler = (e) => setValue(e.target.value);

  return (
    <>
      <Search
        style={{ marginTop: '1rem' }}
        value={value}
        placeholder="Введите имя фамилию или email"
        enterButton="Поиск"
        size="default"
        onChange={valueChangeHandler}
        onSearch={(value) => onSearch(value)}
      />
    </>
  );
}

export default SearchBar;
