import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */
function counter(state = {}, action) {
    switch (action.type) {
    case 'INCREMENT':
        return Object.assign({}, state, { count: state.count + 1 });
    case 'DECREMENT':
        return Object.assign({}, state, { count: state.count - 1 });
    case 'collapse':
        console.log(state);
        return Object.assign({}, state, { collapse: !state.collapse });
    default:
        return state;
    }
}
let state = {
    count: 0,
    collapse: false
};

function asyncAdd() {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'INCREMENT'
            });
        }, 1000);
    };
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
const store = createStore(counter, state, applyMiddleware(thunk));



export default store;
