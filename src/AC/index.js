import { FETCH_TODOS } from '../constants';

const fetchTodos = () => {
	return {
		type: FETCH_TODOS,
	}
};

export { fetchTodos };
