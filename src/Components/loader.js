import React, { Fragment } from 'react';
import '../App.css'

function  Loader(props) {
    return (
        <Fragment>
            <div style={{position: 'absolute', top:'50vh', left:'50vw'}}>
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        </Fragment>
    )
    
}

export default Loader 