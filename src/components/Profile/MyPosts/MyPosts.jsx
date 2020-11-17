import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Привет, как дела?', likesCounts: '12'},
        {id: 2, message: 'Привет Мир!', likesCounts: '3'},
        {id: 3, message: 'Реакт - во!', likesCounts: '56'},
        {id: 4, message: 'Хто я?', likesCounts: '8'},
    ]


    return (
        <div className={s.postBlock}>
        <div className={s.posts}>
            My posts
        </div>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
        </div>
        <div className={s.item}>
            <Post id={postsData[0].id}  message={postsData[0].message} counts={postsData[0].likesCounts}/>
            <Post id={postsData[1].id}  message={postsData[1].message} counts={postsData[1].likesCounts}/>
            <Post id={postsData[2].id}  message={postsData[2].message} counts={postsData[2].likesCounts}/>
            <Post id={postsData[3].id}  message={postsData[3].message} counts={postsData[3].likesCounts}/>
        </div>

    </div>
    )
}


export default MyPosts;