import { combineReducers } from 'redux';


function visibilityFilter(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter;
    } else {
        return state;
    }
}


function todos(state = [], action) {
    switch (action.type) {
    case 'ADD_TODO':
        return state.push({ text: action.text, completed: false });
    case 'TOGGLE_TODO':
        return state.map((todo, index) =>
            action.index === index ?
                { text: todo.text, completed: !todo.completed } :
                todo
        );
    default:
        return state;
    }
}

function todoApp(state = {}, action) {  // 自定义
    return { 
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    };
}

let reducer = combineReducers({visibilityFilter, todos}); // 使用 combineReducers 函数合并 reducer 
