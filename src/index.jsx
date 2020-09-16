import React from 'react';

export default class Todo extends React.Component {
    state = {
        todoList: []
    };

    addTodo = () => {
        this.state.todoList.push(new Date().toTimeString());
        this.setState({
            todoList: this.state.todoList
        })
    };

    render() {
        return (
            <div>
                <div>TodoList</div>
                <button onClick={this.addTodo}>Add todo</button>
                {
                    this.state.todoList.map((item) => <div>{item}</div>)
                }
            </div>
        )
    }
}