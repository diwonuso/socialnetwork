import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return <div className={s.content}>
        <div>
            My posts
        </div>
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>

        <div className={s.item}>
            <img src="https://sun9-26.userapi.com/c858336/v858336316/187f6f/E7XYrej0sZ0.jpg"/>
            post 1
        </div>
        <div className={s.item}>
            post 2
        </div>
        <div className={s.item}>
            post 2
        </div>
        <div className={s.item}>
            post 2
        </div>
        <div className={s.item}>
            post 2
        </div>
    </div>
}


export default MyPosts;