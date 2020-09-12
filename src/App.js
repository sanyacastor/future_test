import React, { useState, useEffect } from 'react';

import AddUser from './Components/AddUser';
import CustomHeader from './Components/Header';
import WelcomeSceen from './Components/WelcomeScreen';
import UserList from './Components/UserList';
import UserCard from './Components/UserCard';
import Pagination from './Components/Pagination';

import { Layout, notification, Row, Col } from 'antd';
import { getUsers } from './servicies/usersApi';

import 'antd/dist/antd.css';

const { Content, Footer } = Layout;

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [welcomeScreen, setWelcomeScreen] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadData = async (url) => {
    setError(null);
    setLoading(true);

    try {
      const data = await getUsers(url);
      setUsers(data);
      setLoading(false);
      setWelcomeScreen(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const usersPerPage = 50;
  const indexOfLastUsers = currentPage * usersPerPage;
  const IndexOfFirstUsers = indexOfLastUsers - usersPerPage;

  useEffect(() => {
    const result = users.concat().filter((user) => {
      return (
        user['firstName'].toLowerCase().includes(search.toLowerCase()) ||
        user['lastName'].toLowerCase().includes(search.toLowerCase()) ||
        user['email'].toLowerCase().includes(search.toLowerCase())
      );
    });

    setTotalPages(Math.floor(result.length / usersPerPage));
    const displayUsers = result.slice(IndexOfFirstUsers, indexOfLastUsers);

    setSearchResult(displayUsers);
  }, [
    IndexOfFirstUsers,
    currentPage,
    indexOfLastUsers,
    search,
    searchResult.length,
    users,
  ]);

  useEffect(() => {
    if (error) {
      openNotificationWithIcon('error', error);
    }
  }, [error]);

  const userClickHandler = (id) => {
    users.forEach((el) => {
      if (parseInt(el.id) === parseInt(id)) {
        setCurrentUser(el);
      }
    });
  };

  const searchHandler = (search) => {
    setSearch(search);
    setCurrentPage(1);
  };

  const addUser = (user) => {
    setUsers([user, ...users]);
    openNotificationWithIcon('success', `${user.firstName} добавлен`);
  };

  const openNotificationWithIcon = (type, text) => {
    notification[type]({
      message: text,
    });
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        {welcomeScreen ? (
          <Content>
            <WelcomeSceen apiUrl={loadData} onLoading={loading} />
          </Content>
        ) : (
          <>
            <CustomHeader searchHandler={searchHandler} />
            <Content>
              <Row>
                <Col span={14} offset={5}>
                  <AddUser addUser={addUser} />
                
              <UserList data={searchResult} clickHandler={userClickHandler} />
              <Pagination
                total={totalPages}
                paginate={paginate}
                currentPage={currentPage}
                listLength={searchResult.length}
                itemsPerPage={usersPerPage}
              />

              <UserCard user={currentUser} />
              </Col>
              </Row>
            </Content>
          </>
        )}
        <Footer style={{ textAlign: 'center' }}>Created by Sanya</Footer>
      </Layout>
    </div>
  );
}

export default App;
