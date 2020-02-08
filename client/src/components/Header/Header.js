import React from 'react';
import "./Header.css";

function Header(){
    return (
        <div className="header">
            <h1>Pick your Hero</h1>
            <h2>Click on a superhero to absorb their power.</h2>
            <h2 id="yellow-warning"> If you click on them more than once then you will die.</h2>
        </div>
    );
}

export default Header;