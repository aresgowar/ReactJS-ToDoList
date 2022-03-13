import './ToDoList.css';
import React from 'react';
import Todo from './Todo';

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todoListName: props.name, taskName: '', tasks: [] }
  }

  myTaskChangeHandler = (event) => {
    this.setState({ taskName: event.target.value })
    //console.log('myTaskChangeHandler', this.state.taskName);
  }

  addTask = (event) => {
    //console.log('addTask', this.state.taskName);
    if (this.state.taskName === '') {
      return
    }
    const id = this.state.tasks.length
    const name = this.state.taskName
    this.state.tasks.push({id, name, done: false})
    this.setState({ taskName: '' })
  }

  deleteTask = (id) => {
    // console.log("delete", id);
    const tasks = this.state.tasks.filter((task) => task.id !== id)
    this.setState({tasks})
  }

  completeTask = (id) => {
    // console.log("complete", id);
    const tasks = this.state.tasks
    tasks.forEach(task => {
      if (task.id === id) {
        task.done = true
      } 
    })
    this.setState({tasks})
  }

  render() {
    return (
      <div className="todoList">
        <br />
        {this.state.todoListName}
        <br />
        <div className="aligned">
          <img
            src='.\assest\iconfinder_gnome-app-install_29240 (1).png'
            alt='Add Task'
            width='25'
            style={{ cursor: 'pointer' }}
            title='Bấm để thêm task'
            onClick={() => this.addTask()}
          />
          <input
            type='text'
            value={this.state.taskName}
            onChange={this.myTaskChangeHandler}
          />

        </div>
        <br />
        <ul style={{ paddingLeft: '10px' }}>
          {this.state.tasks.map((value, index) => {
            console.log('map', value);
            //return <li key={index} className='taskItem'>{value}</li>
            return (
            <Todo
              // ref='todo'
              key={index}
              id={value.id}
              value={value.name}
              deleteTask={this.deleteTask}
              completeTask={this.completeTask}
            />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
