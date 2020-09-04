import React from 'react';

export default class Todo extends React.Component {
    state = {
        todoList: []
    };

    addTodo = () => {
        this.setState({
            todoList: this.todoList.push(new Date())
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