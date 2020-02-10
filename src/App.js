import React,  { useState, useEffect } from 'react';
import UserList from './Components/UserList';
import ActiveUser from './Components/ActiveUser';
import SearchBar from './Components/SearchBar';
import AddUser from "./Components/AddUser";
import WelcomeSceen from "./Components/WelcomeScreen";
import Pagination from "./Components/Pagination";
import Loader from "./Components/Loader";

import './App.css'
import 'antd/dist/antd.css';
import { Layout, Menu, notification } from 'antd';
const { Header, Content, Footer } = Layout;


function App() {

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [welcomeScreen, setWelcomeScreen] = useState(true)
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)
  
  const loadData = (url) => {
    setError(null)
    setLoading(true)
    setWelcomeScreen(false)

    fetch(url)
    .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error ('Что-то пошло не так');
            }
        })
        .then(data => { setUsers(data)
                        setLoading(false)
          }) 
        .catch(error => {setError('Ошибка загрузки данных')
                        setLoading(false)
                        setWelcomeScreen(true)
                        });
    }
    
  const usersPerPage = 50
  const indexOfLastUsers = currentPage * usersPerPage
  const IndexOfFirstUsers = indexOfLastUsers - usersPerPage

  useEffect(() => {
  
    const result = users.concat().filter(item => {
      return item['firstName'].toLowerCase().includes(search.toLowerCase())
          || item['lastName'].toLowerCase().includes(search.toLowerCase())
          || item['email'].toLowerCase().includes(search.toLowerCase()) 
      })

    setTotalPages(Math.floor(result.length/usersPerPage))
    const displayUsers =  result.slice(IndexOfFirstUsers, indexOfLastUsers)

    setSearchResult(displayUsers);
  }, [IndexOfFirstUsers, currentPage, indexOfLastUsers, search, searchResult.length, users]);

  useEffect(()=>{
    if(error){
      openNotificationWithIcon('error', error)
    }
  },[error])


  const userClickHandler = (id) => {
    users.forEach(el => {
      if(parseInt(el.id) === parseInt(id)) {
        setCurrentUser(el)
      }
    });
  }

  const searchHandler = search => {
    setSearch(search)
    setCurrentPage(1)
  }

  const addUser = (user) => {
    setUsers([user, ...users])
    openNotificationWithIcon('success',`${user.firstName} добавлен`)
  }

  const openNotificationWithIcon = (type, text) => {
        notification[type]({
            message: text,
        });
    };
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  } 
  
  return (
    <div className="App">
      <Layout>
      {welcomeScreen ? 
        <WelcomeSceen onClick={loadData}/>
        :<React.Fragment>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
            <SearchBar onSearch = {searchHandler}/>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <AddUser addUser={addUser}/>
            { loading ?
            <Loader/>
            :<UserList
            data = {searchResult}
            clickHandler={userClickHandler}/>
            }
            { searchResult.length >= usersPerPage ?
            <Pagination 
            total={totalPages}
            paginate={paginate}
            currentPage={currentPage}/>
            : null
            }
            <ActiveUser user={currentUser}/>
          </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Sanya</Footer>
          </React.Fragment>
      }
      </Layout>
    </div>
  );
}

export default App;
