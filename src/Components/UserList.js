import React, { Fragment, useState, useEffect } from 'react';
// import Loader from "./loader";
import _ from "lodash";
import '../App.css'



function UserList({data, clickHandler}) {

    const [users, setUsers] = useState(data)
    const [sort, setSort] = useState('asc');
    const [sortField, setSortField] = useState('');

    const onSort = (sortField) => {
        const cloneData = users.concat();
        const sortType = sort === 'asc' ? 'desc' : 'asc';
        const orderedData = _.orderBy(cloneData, sortField, sortType);

        setUsers(orderedData)
        setSort(sortType)
        setSortField(sortField)
    }

    const sortIcon = (field) => {
        return (sort === 'asc' && sortField === field) ? '▲' : '▼'
    }

    useEffect(() => {
            setUsers(data)
        },[data])

   return <Fragment>  
        <h3>Список пользователей</h3>
        <br/>
        <table className='users'>
            <thead className='users__header'>
                <tr className='users__row'>
                    <th className='user'>
                    <span onClick={() => onSort('id')}>
                        ID {sortIcon('id')}</span>
                    </th>
                    <th>
                        <span onClick={() => onSort('firstName')}>
                        FIRST NAME {sortIcon('firstName')}</span>
                    </th>
                    <th>
                        <span onClick={() => onSort('lastName')}>
                        LAST NAME {sortIcon('lastName')}</span>
                    </th>
                    <th>
                        <span onClick={() => onSort('email')}>
                        EMAIL {sortIcon('email')}</span>
                    </th>
                    <th>
                        <span onClick={() => onSort('phone')}>
                        PHONE {sortIcon('phone')}</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {!users ?
                <tr><th>Ничего не найдено</th></tr>
                :<Fragment>
                    {users.map((item, index) => (
                        <tr 
                        className='users__row'
                        key={index} 
                        onClick={()=> clickHandler(item.id)}>
                            <td className='users__item' >{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                </Fragment>   
                }
            </tbody>
        </table>
    </Fragment>

}


export default UserList;