import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { fetchTodos } from '../AC';

class TodoList extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
				Todos:
				{this.props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
			</div>
		);
	}
}

export default connect(state => ({
	todos: state.todos
}),
	{ fetchTodos })(TodoList);
