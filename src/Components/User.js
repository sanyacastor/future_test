import React from 'react';
import '../App.sass'

 function User(props) {
    const user = props.data;
    

    return  (
        

        <div className="message is-primary">
               <div className="message-body has-text-left"> 
                        <h2 className='title'>Выбран пользователь: {user.firstName}</h2>
                        Описание:<br/>
                        <textarea className='textarea' defaultValue={user.description ? user.description :'' }/>        
                        <p className=''>Адрес проживания: {user.address.streetAddress ? user.address.streetAddress : ''}</p>
                        <p className=''>Город: {user.address.city ? user.address.city : ''}</p>
                        <p className=''>Провинция/штат: {user.address.state ? user.address.state : ''}</p>
                        <p className=''>Индекс: {user.address.zip ? user.address.zip : ''}</p>
                </div> 
        </div> 
        
    )
}

export default User