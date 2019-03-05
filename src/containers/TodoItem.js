import React, { Component } from 'react';

class TodoItem extends Component {
	render() {
		return (
			<div>
				I'm item {this.props.id}
			</div>
		);
	}
}

export default TodoItem;
