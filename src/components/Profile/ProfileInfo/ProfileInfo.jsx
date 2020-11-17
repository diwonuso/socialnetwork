import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div>
            <img src="https://sun9-16.userapi.com/impf/c837221/v837221929/3cea7/Gn-GDyKSXkg.jpg?size=604x456&quality=96&proxy=1&sign=ba2e2c66f13f2490c97267db04c26a88"/>
        </div>
        <div className={s.discriprionBlock}>
            ava + discription
        </div>
    </div>
}


export default ProfileInfo;