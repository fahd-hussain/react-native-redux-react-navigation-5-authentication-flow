export const initState = {
    loading: false,
    token: null,
    error: "",
    login: false
};

export const tokenReducer = (state = initState, action) => {
    switch (action.type) {
        case "TOKEN_REQUEST":
            return {
                ...state,
                loading: true,
            };

        case "TOKEN_SUCCESS":
            return {
                ...state,
                token: action.payload,
                login: true,
                loading: false,
                error: "",
            };

        case "TOKEN_FAILURE":
            return {
                ...state,
                error: action.payload,
                token: "",
            };
        default:
            return state;
    }
};
