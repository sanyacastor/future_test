import React,  { Component } from 'react';
import Users from './Components/Users';
import User from './Components/User';
import SearchBar from './Components/SearchBar';
import AddUser from "./Components/addNewUser";
import WelcomeSceen from "./Components/WelcomeScreen";
import Loader from "./Components/loader";
import ReactPaginate from "react-paginate"
import _ from "lodash"

import './App.sass'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      sortedUsers: [],
      addUserVisible: false,
      isLoading: false,
      error: null,
      welcomeScreen: true,
      sorted: {
        id: false,
        firstName: false,
        lastName: false,
        phone: false,
        email: false
      },
      search:'',
      currentPage: 0,
      currentUser: {}
    };

  }

  loadData = (url) => {
    this.setState({ isLoading: true, welcomeScreen: false});

    fetch(url)
    .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error ('Что-то пошло не так');
            }
        })
        .then(data => this.setState({users: data, sortedUsers: data, isLoading: false, welcomeScreen: false}))
        .catch(error => this.setState({error: error, isLoading: false}));
    }

  sortByNumber = (param) => {
    let cloneUsers = this.state.users.slice()

    if(this.state.sorted[param]) {
      this.setState(prevState => ({
        sortedUsers: cloneUsers.sort((a,b) => b[param] - a[param]),
        sorted: {...prevState.sorted, [param]: !this.state.sorted[param]}
        }))
    } else {
      this.setState(prevState => ({
        sortedUsers: cloneUsers.sort((a,b) => a[param] - b[param]),
        sorted: {...prevState.sorted, [param]: !this.state.sorted[param]}
        }))
    }
  }

  sortByString = (param) => {
    let cloneUsers = this.state.users.slice()
  
    
    if(this.state.sorted[param]) {
      this.setState(prevState => ({
        sortedUsers: cloneUsers.sort(function(a, b){
          let nameA = a[param].toLowerCase()
          let nameB = b[param].toLowerCase()

          if (nameA < nameB)
            return -1
          if (nameA > nameB)
            return 1
          return 0
        }),
        sorted: {...prevState.sorted, [param]: !this.state.sorted[param]}
        }))
    } else {
      this.setState(prevState => ({
          
        sortedUsers: cloneUsers.sort(function(a, b){
          let nameA = a[param].toLowerCase()
          let nameB = b[param].toLowerCase()
          
          if (nameB < nameA)
            return -1
          if (nameB > nameA)
            return 1
          return 0
        }),
        sorted: {...prevState.sorted, [param]: !this.state.sorted[param]}
        }))
      }
    }

  getFilteredData(){
    const {users, search} = this.state

    if (!search) {
      return users
    }

    var result = users.filter(item => {
      return item['firstName'].toLowerCase().includes(search.toLowerCase())
        || item['lastName'].toLowerCase().includes(search.toLowerCase())
        || item['email'].toLowerCase().includes(search.toLowerCase()) 
    })
      return result
  }

  userClickHandler = (id) => {
    this.state.sortedUsers.forEach(el => {
      if(parseInt(el.id) === parseInt(id)) {
        this.setState({
          currentUser: el
        })
      }
    });
  }

  searchHandler = search =>(
    this.setState({search, sortedUsers: this.getFilteredData()})
  )

  addUserHide = (e) => {
    e.preventDefault()
    this.setState({addUserVisible: false})
}

  pageChangeHandler = ({selected}) => this.setState({currentPage: selected})


  addUser = (user) => {
    this.setState(prevState =>({
      users: [user, ...prevState.users],
      sortedUsers: [user, ...prevState.users],
      addUserVisible: false,
    }))
  }

  isEmptyObj = (obj) => JSON.stringify(obj) === "{}"


  render() {
    let userCard;
    let addUser;

    const sortedUsers = this.getFilteredData()

    if (this.isEmptyObj(this.state.currentUser)) {
      userCard = <p>Пользователь не выбран</p>;
    } else {
      userCard = <User data={this.state.currentUser}/>;
    }
    
    if(!this.state.addUserVisible){
      addUser = <button className="button is-rounded" 
      onClick={() => this.setState({addUserVisible: true})}>+ Добавить</button>;
      } else {
      addUser = <div className="section is-flex"><AddUser addUser={this.addUser} cancelHandler={this.addUserHide}/></div>
    }
    

    if(this.state.welcomeScreen) {
      return <WelcomeSceen onClick={this.loadData}/>
    }

    if(this.state.isLoading) {
      return <Loader/>
    }

    const maxUsers = 50;
    const displayData = _.chunk(this.state.sortedUsers, maxUsers)[this.state.currentPage]

    return (
      <div className="App content">
        <div className="container">
          <div className="column is-10 is-offset-1">
            
            <div className="section">
              <h1 className="title">Тестовое задание</h1>
              <div className="is-8 is-flex">
                  <SearchBar onSearch = {this.searchHandler}/>
              </div>
            </div>
            {addUser} 
            <div className="section">
              <Users className="is-block"
              data = {displayData}
              sortedFlags = {this.state.sorted}
              sortByNumber={this.sortByNumber}
              sortByString={this.sortByString}
              clickHandler={this.userClickHandler}/>

              { this.state.users.length > maxUsers 
              ? <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={this.displayData}
                marginPagesDisplayed={3}
                pageRangeDisplayed={1}
                onPageChange={this.pageChangeHandler}
                forcePage={this.state.currentPage}

                containerClassName='pagination'
                pageLinkClassName='pagination-link'
                activeLinkClassName='is-current is-primary'
                previousLinkClassName='pagination-previous'
                nextLinkClassName='pagination-next'
              /> : null
              }

              <div className="section">
                {userCard}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
