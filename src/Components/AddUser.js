import React, { Fragment, useState, useEffect } from 'react';
import { Modal, Button } from 'antd';

function AddNewUser({addUser}) {

    const [okButtonDisabled, setOkButtonDisabled] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState({});

    const handleClick = e => {
        setShowModal(true)
    };

    const handleCancel = e => {
        clearForm()
        setShowModal(false) 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const usr = {
            id: input.id,
            firstName: input.firstName,
            lastName: input.lastName,
            phone: input.phone,
            email: input.email,
            address: {
                streetAddress: '',
			    city: '',
			    state: '',
			    zip: ''
            }
        }
        
        addUser(usr)
        setShowModal(false)
        clearForm()
      };


    const clearForm = () => {
         document.querySelector("form").reset()
    }

    useEffect(()=>{
           if( !input.id ||
            !input.firstName ||
            !input.lastName || 
            !input.email || 
            !input.phone ) {
            setOkButtonDisabled(true)
        } else {
            setOkButtonDisabled(false) 
        }
    },[input])

    

    return (
        <Fragment>

            <Button type="primary" onClick={handleClick} style={{margin: '2em 0'}}>
                Добавить пользователя
            </Button>

            <Modal
            title="Добавить пользователя"
            visible={showModal}
            onOk={handleSubmit}
            okButtonProps={{ disabled: okButtonDisabled }}
            onCancel={handleCancel}
            >
                <form className="login-form" style={{display: 'flex', flexDirection: 'column'}}>
                    <label>
                    ID:
                            <input
                            className="addUser__input"
                            placeholder="id"
                            onChange={e => setInput({...input, id: e.target.value})} 
                            />
                    </label>    

                    <label>
                    Имя:
                        <input
                        className="addUser__input"
                        placeholder="firstName"
                        onChange={e => setInput({...input, firstName: e.target.value})} 
                        />
                    </label>

                    <label>
                    Фамилия:
                        <input
                        className="addUser__input"
                        placeholder="lastName"
                        onChange={e => setInput({...input, lastName: e.target.value})} 
                        />
                    </label>

                    <label>
                    Email:
                        <input
                        className="addUser__input"
                        placeholder="email"
                        onChange={e=> setInput({...input, email: e.target.value})}
                        />
                    </label>

                    <label>
                    Телефон:
                        <input
                        className="addUser__input"
                        placeholder="phone"
                        onChange={e=> setInput({...input, phone: e.target.value})}
                        />
                    </label>

                </form>
            </Modal>
        </Fragment>
               
    )
}

export default AddNewUser