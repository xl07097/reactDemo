import { combineReducers } from 'redux';
import { todos } from './reducer/todos';
import { visibilityFilter} from './reducer/visibilityFilter';

function todoApp(state = {}, action) {  // 自定义
    return { 
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    };
}

let reducer = combineReducers({visibilityFilter, todos}); // 使用 combineReducers 函数合并 reducer 
