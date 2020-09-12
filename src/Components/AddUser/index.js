import React, { useState, useEffect } from 'react';
import { Modal, Button, Input } from 'antd';

import './addUser.css';

function AddUser({ addUser }) {
  const initialUser = {
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: {
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
    },
  };

  const [okButtonDisabled, setOkButtonDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState(initialUser);

  useEffect(() => {
    if (
      !input.id.trim() ||
      !input.firstName.trim() ||
      !input.lastName.trim() ||
      !input.email.trim() ||
      !input.phone.trim()
    ) {
      setOkButtonDisabled(true);
    } else {
      setOkButtonDisabled(false);
    }
  }, [input]);

  const handleClick = (e) => {
    setShowModal(true);
  };

  const handleCancel = (e) => {
    clearForm();
    setShowModal(false);
  };

  const clearForm = () => {
    document.querySelector('form').reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: input.id,
      firstName: input.firstName,
      lastName: input.lastName,
      phone: input.phone,
      email: input.email,
      address: {
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
      },
    };

    addUser(newUser);
    setShowModal(false);
    clearForm();
  };

  return (
    <>
      <Button type="primary" onClick={handleClick} style={{ margin: '1em 0' }}>
        Добавить пользователя
      </Button>

      <Modal
        title="Добавить пользователя"
        visible={showModal}
        onCancel={handleCancel}
        footer={
          <Button key="back" onClick={handleCancel}>
            Отмена
          </Button>
        }
      >
        <form
          onSubmit={handleSubmit}
          className="login-form"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <label>
            ID:
            <Input
              className="add-user__input"
              placeholder="id"
              onChange={(e) => setInput({ ...input, id: e.target.value })}
              type="text"
              required
            />
          </label>

          <label>
            Имя:
            <Input
              className="add-user__input"
              placeholder="firstName"
              onChange={(e) =>
                setInput({ ...input, firstName: e.target.value })
              }
              type="text"
              required
            />
          </label>

          <label>
            Фамилия:
            <Input
              className="add-user__input"
              placeholder="lastName"
              onChange={(e) => setInput({ ...input, lastName: e.target.value })}
              type="text"
              required
            />
          </label>

          <label>
            Почта:
            <Input
              className="add-user__input"
              placeholder="email"
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              type="email"
              required
            />
          </label>

          <label>
            Телефон:
            <Input
              className="add-user__input"
              placeholder="phone"
              onChange={(e) => setInput({ ...input, phone: e.target.value })}
              type="text"
              required
            />
          </label>
          <button htmltype="submit" disabled={okButtonDisabled}>
            Добавить
          </button>
        </form>
      </Modal>
    </>
  );
}

export default AddUser;
