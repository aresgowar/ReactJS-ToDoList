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
              <td style={{ verticalAlign: 'top' }}>
                <ToDoList name='Học Pài' />
              </td>
              <td style={{ verticalAlign: 'top' }}>
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
