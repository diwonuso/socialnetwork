import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs" + "/" + props.id;

    return  <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return  <div className={s.messages}>
        <div className={s.message}>{props.message}</div>
    </div>
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Denis"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Katya"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Simon"},
        {id: 6, name: "Andrew"},
        {id: 7, name: "Nastya"},
    ]
    let messageData = [
        {id : 1, message: "Привет, как дела?"},
        {id : 2, message: "Йоу"},
        {id : 3, message: "Завтра в 7:00"},
        {id : 4, message: "Пойдём гулять?"},
        {id : 5, message: "React - круто!"},
        {id : 6, message: "Новостей нет"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
                <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} />
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id} />
                <Message message={messageData[1].message} id={messageData[1].id} />
                <Message message={messageData[2].message} id={messageData[2].id} />
                <Message message={messageData[3].message} id={messageData[3].id} />
                <Message message={messageData[4].message} id={messageData[4].id} />
                <Message message={messageData[5].message} id={messageData[5].id} />
            </div>
        </div>



    )
}


export default Dialogs