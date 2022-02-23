
export const userReducer = (state, action) => {
    /// create a reducer to sum up the authentication actions
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        case "OBSERVER_START":
            return { ...state, user: action.payload, observerStart: true }
        default:
            return { ...state };
    }
}