export function todos(state = [], action) {
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