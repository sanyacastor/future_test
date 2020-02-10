import React, { Fragment, useState } from 'react';
import { Input } from 'antd'
const { Search } = Input;

function SearchBar({onSearch}) {

    const [value, setValue] = useState('')
    const valueChangeHandler = e => setValue(e.target.value)

    return (
        <Fragment>
            <Search
                style={{ marginTop: '1rem' }}
                value={value}
                placeholder="Введите имя фамилию или email"
                enterButton="Поиск"
                size="default"
                onChange={valueChangeHandler}
                onSearch={value => onSearch(value)}
                />
        </Fragment>
    )
}

export default SearchBar