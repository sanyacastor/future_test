import React, { Fragment, useState } from 'react';
import '../App.sass'

function SearchBar(props) {

        const [value, setValue] = useState('')
        const valueChangeHandler = e => setValue(e.target.value)

    return (
        <Fragment>
                <div className="level-left">
                    <input 
                    className="level-item input is-primary" 
                    type="text" 
                    placeholder="Поиск"
                    onChange={valueChangeHandler} 
                    value={value}
                    />
                    <button 
                    onClick={() => props.onSearch(value)}
                    className="level-item button is-primary">найти</button>
                </div>
        </Fragment>
    )
    
}

export default SearchBar