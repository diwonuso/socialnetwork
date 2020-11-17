import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div>
        <div className={s.item}>
            <img src="https://sun9-26.userapi.com/c858336/v858336316/187f6f/E7XYrej0sZ0.jpg"/>
            {props.message}
        </div>
        <div>
            {props.counts}
        </div>
    </div>


}


export default Post;