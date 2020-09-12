import React, { Fragment } from 'react';
import './loader.css';

function Loader() {
  return (
    <Fragment>
      <div>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </Fragment>
  );
}

export default Loader;
