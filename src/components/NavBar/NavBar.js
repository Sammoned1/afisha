import React from 'react';
import Search from "../UI/Search/Search";
import classes from './NavBar.module.css'
import ActivePanel from "./ActivePanel/ActivePanel";

const NavBar = () => {
    return (
        <header>
            <Search/>
        </header>
    );
};

export default NavBar;