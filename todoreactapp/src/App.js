import './App.css';
import '@atlaskit/css-reset';
import initialData from './data/initial-data';
import Column from './components/column';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends React.Component {
  state = initialData

  onDragEnd = result => {
    
  }

  render() {
    return (
      <DragDropContext

      >
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
          
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    )
  }
}

export default App;
