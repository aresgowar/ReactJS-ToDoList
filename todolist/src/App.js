import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { taskName: '',  task: []  }
  }

  myTaskChangeHandler = (event) => {
    this.setState({ taskName: event.target.value })
    //console.log('myTaskChangeHandler', this.state.taskName);
  }

  addTask = (event) => {
    console.log('addTask', this.state.taskName);
    if (this.state.taskName === '') {
      return
    }
    this.state.task.push(this.state.taskName)
    this.setState({ taskName: ''})
    //this.setState({ task: this.state.taskName})
  }

  render() {
    return (
      <div className="App">
          <br />
          To Do List
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
            <ul>
              {this.state.task.map((value, index) => {
                return <li key={index} className='taskItem'>{value}</li>
              })}
            </ul>
      </div>
    );
  }
}

export default App;
