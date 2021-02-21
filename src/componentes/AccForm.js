import React, {useState} from 'react';
import {Link} from 'react-router-dom'


function AccForm(){

  return (
    <div className="acc-container">
      <Link to="/Form">
        <button>HOLAS</button>
      </Link>
    </div>
  );
}

export default AccForm;