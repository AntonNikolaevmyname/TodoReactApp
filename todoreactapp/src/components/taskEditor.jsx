import React from 'react';
//import styled from 'styled-components';

export default class TaskEditor extends React.Component {
   
    render() {
        console.log(this.props)
        const {index, task} = this.props
        return (
        <form>
            <div>#{index + 1}</div>
            <textarea defaultValue={task.content}></textarea>
            <input 
            type="button" 
            value="Изменить" 
            onClick={() => console.log("CLICK Изменить")}></input>
            <input 
            type="button" 
            value="Удалить"
            onClick={() => console.log("CLICK Удалить")}></input>
        </form>
        )
    }
    }
