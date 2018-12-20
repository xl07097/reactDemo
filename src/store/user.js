let user = {
    state: {
        user: ''
    },
    mutations: {
        LOGIN_STATE: (state, params) => {
            state.user = params;
        }
    },
    actions:{

    }
}

export default user;