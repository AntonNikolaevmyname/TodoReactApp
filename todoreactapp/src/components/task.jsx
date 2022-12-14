import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import TaskEditor from './taskEditor'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'red' : 'white')};
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable 
        key={this.props.task.id}
        draggableId={this.props.task.id.toString()} 
        index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <TaskEditor index={this.props.index} task={this.props.task}></TaskEditor>
          </Container>
        )}
      </Draggable>
    );
  }
}
