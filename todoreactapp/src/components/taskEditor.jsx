import React from 'react';
//import styled from 'styled-components';
import { TodoControllerUpdate, TodoControllerComplete, TodoControllerDelete } from './../controllers/todoController';

export default class TaskEditor extends React.Component {
   
    render() {
        const { index, task } = this.props
        //console.log(task)
        /*
        1. Взять измененный контент задачи и с ним вызвать сервис обновления
        2. Перемещение колонок, не работает сохранение позиции
        */
        return (
        <form>
            <div>#{index + 1}</div>
            <textarea 
            style={{'maxWidth': '95%'}}
            defaultValue={task.content}></textarea>
            <input 
            type="button" 
            value="Изменить" 
            onClick={() => TodoControllerUpdate(task)}></input>
            <input 
            type="button" 
            value="Выполнить" 
            onClick={() => TodoControllerComplete(task)}></input>
            <input 
            type="button"
            value="Удалить"
            onClick={() => TodoControllerDelete(task.id)}></input>
        </form>
        )
    }
    }
