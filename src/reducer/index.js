import { combineReducers } from 'redux';
import todolistReducer from './todos';

export default combineReducers({
	todos: todolistReducer,
})
