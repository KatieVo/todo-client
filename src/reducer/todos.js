import { FETCH_TODOS } from "../constants";

export default (todosState = [{id: 1, title: 'item1'}], action) => {
	switch (action) {
		case FETCH_TODOS:
			return ;
		default:
			return todosState;
	}
}
