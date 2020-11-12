import React from 'react';
import s from'./Navbar.module.css';

const Navbar = () => {
    return <nav className={s.navbar}>
        <div className={s.item}>
            <a>Профиль</a>
        </div>
        <div className={s.item}>
            <a>Messages</a>
        </div>
        <div className={s.item}>
            News
        </div>
    </nav>
}


export default Navbar;