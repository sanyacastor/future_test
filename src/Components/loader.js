import React, { Fragment } from 'react';

function  Loader(props) {
    return (
        <Fragment>
            <div>
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        </Fragment>
    )
    
}

export default Loader 