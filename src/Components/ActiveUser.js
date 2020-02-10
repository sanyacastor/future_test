import React from 'react';
import { Card } from "antd";

 function ActiveUser({user}) {

    const isEmpty = (obj) => JSON.stringify(obj) === "{}"    
    return  (
        <div style={{ background: '#ECECEC', padding: '30px' }}>    
            {isEmpty(user)?
            <p>Пользователь не выбран</p>

            :<Card title={user.firstName} 
                        bordered={false} 
                        style={{ width: 300, textAlign: 'left'}}>
                <p>Описание: {user.description}</p>
                <p>Улица: {user.address.streetAddress}</p>
                <p>Город: {user.address.city}</p>
                <p>Штат: {user.address.state}</p>
                <p>Zip: {user.address.zip}</p>
            </Card>}    
        </div>
    )
}

export default ActiveUser