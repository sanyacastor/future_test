import React, { Component, Fragment } from 'react';
import '../App.sass'

class Users extends Component {

    // sortByid = (param) => {
    //     let sortedUsers = this.state.users
    //     if (this.state.sorted.byId) {
    //         sortedUsers = sortedUsers.sort(function (a, b) {
            
    //             if (a.param > b.param) {
    //               return 1;
    //             }
    //             if (a.param< b.param) {
    //               return -1;
    //             }
    //             return 0;
    //         })
    //     } else {
    //         sortedUsers = sortedUsers.sort(function (a, b) {
            
    //             if (a.param < b.param) {
    //               return 1;
    //             }
    //             if (a.param > b.param) {
    //               return -1;
    //             }
    //             return 0;
    //         })
    //     }
        
    //     return sortedUsers
    // }

    

  render() {

    let result

    if(!this.props.data){
        result = <tr><th>Ничего не найдено</th></tr>
    } else {
        result = <Fragment>
                {this.props.data.map((item, index) => (
                    <tr 
                    className='users__item'
                    key={index} 
                    onClick={()=> this.props.clickHandler(item.id)}>
                    <th>{item.id}</th>
                    <th>{item.firstName}</th>
                    <th>{item.lastName}</th>
                    <th>{item.email}</th>
                    <th>{item.phone}</th>
                    </tr>
                ))}
            </Fragment>
    }

    return <Fragment>
        <table className="table">
            <thead>
                <tr>
                    <th>
                    <span onClick={() => this.props.sortByNumber('id')}>
                        ID {this.props.sortedFlags.id ? "▴" : "▾"}</span>
                    </th>
                    <th>
                        <span onClick={() => this.props.sortByString('firstName')}>
                        firstName {this.props.sortedFlags.firstName ? "▴" : "▾"}</span>
                    </th>
                    <th>
                        <span onClick={() => this.props.sortByString('lastName')}>
                            lastName{this.props.sortedFlags.lastName ? "▴" : "▾"}</span>
                    </th>
                    <th>
                        <span onClick={() => this.props.sortByString('email')}>
                            email{this.props.sortedFlags.email ? "▴" : "▾"}</span>
                    </th>
                    <th>
                        <span onClick={() => this.props.sortByString('phone')}>
                            phone{this.props.sortedFlags.phone ? "▴" : "▾"}</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
        </table>
    </Fragment>
      
  }

}


export default Users;