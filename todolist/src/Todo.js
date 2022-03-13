import './Todo.css';
import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        console.log('props: ', props);
        this.state = { id: props.id, value: props.value, done: props.done }
    }

    completeTask = (id) => {
        // console.log("todo complete", this.props.id);
        this.setState({ done: true })
        this.props.completeTask(this.props.id)
    }

    render() {
        let checkDone = ''
        if (!this.state.done) {
            checkDone = (
                <img 
                    src='.\assest\iconfinder_Symbol_-_Check_58687.png'
                    alt='Done'
                    width='25'
                    style={
                        { cursor: 'pointer' }}
                    title='Bấm để hoàn thành task'
                    onClick={
                        () => this.completeTask(this.props.id)}
                />
            )
        }
        return (
            <div className="todo aligned" >
                {checkDone}
                <img className={this.state.done ? 'noCheckDone' : ''}
                    src='.\assest\iconfinder_f-cross_256_282471.png'
                    alt='Delete'
                    width='15'
                    style={
                        { cursor: 'pointer' }}
                    title='Bấm để xoá task'
                    onClick={
                        () => this.props.deleteTask(this.props.id)}
                /> 
                &nbsp; &nbsp;
                <span className={this.state.done ? 'done' : ''} >
                    {this.props.value}
                </span>
            </div>
        );
    }
}

export default Todo;