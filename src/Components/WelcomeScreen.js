import React, { Fragment } from 'react';
import '../App.sass'

function  welcomeScreen(props) {

    const API_small = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
    const API_big = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

    return (
        <Fragment>
         <div className="App content">
                <div className="container">
                  <div className="column is-10 is-offset-1">
                  <div className="section">
                      <h2 className="title">Солько пользователй загрузить?</h2>
                    <button className="button" onClick={()=> props.onClick(API_small)}>50</button>
                    <button className="button" onClick={()=> props.onClick(API_big)}>1000</button>
                    </div>
                  </div>
                </div>
              </div>
        </Fragment>
    )  
}

export default welcomeScreen 