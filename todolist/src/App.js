import './App.css';
import React from 'react';
import ToDoList from './ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { taskName: '', tasks: [] }
  }

  render() {
    return (
      <div className="App">
        <table border='1'>
          <thead>
            <tr>
              <th>Nhiệm vụ 1</th>
              <th>Nhiệm vụ 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ToDoList name='Học Pài' />
              </td>
              <td>
                <ToDoList name='Chơi Game' />
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
