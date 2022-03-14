import './Todo.css';
import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        // console.log('constructor: ', props);
        // this.state = { id: props.id, value: props.value, done: props.done }
        this.state = { data: props.data }
    }

    static getDerivedStateFromProps(props, state) {
        // console.log('getDerivedStateFromProps: ', props);
        return { data: props.data };
    }

    // completeTask = (id) => {
    //     // console.log("todo complete", this.props.id);
    //     this.setState({ done: true })
    //     this.props.completeTask(this.props.id)
    // }

    render() {
        console.log('render: ');
        let checkDone = ''
        if (!this.state.data.done) {
            checkDone = (
                <img
                    src={
                        process.env.PUBLIC_URL +
                        '/assets/iconfinder_Symbol_-_Check_58687.png'
                    }
                    alt='Done'
                    width='25'
                    style={
                        { cursor: 'pointer' }}
                    title='Bấm để hoàn thành task'
                    onClick={
                        () => this.props.completeTask(this.state.data.id)}
                />
            )
        }
        return (
            <div className="todo aligned" >
                {checkDone}
                <img className={this.state.data.done ? 'noCheckDone' : ''}
                    src={
                        process.env.PUBLIC_URL +
                        '/assets/iconfinder_f-cross_256_282471.png'
                    }
                    alt='Delete'
                    width='15'
                    style={
                        { cursor: 'pointer' }}
                    title='Bấm để xoá task'
                    onClick={
                        () => this.props.deleteTask(this.state.data.id)}
                />
                &nbsp; &nbsp;
                <span className={this.state.data.done ? 'done' : ''} >
                    {this.props.data.name}
                </span>
            </div>
        );
    }
}

export default Todo;