import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
    <nav className={s.navbar}>
        <div className={`${s.item} `}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Профиль</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={s.item}>
            News
        </div>
    </nav>
)
}


export default Navbar;