const transactionReducer = (state, action) => {
    /// create a reducer to sum up the authentication actions
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true, error: null }
        case "ERROR":
            return { ...state, error: action.payload, loading: false }
        case "CREATE_TRANSACTION":
            return { ...state, transactions: action.payload, loading: false }
        case "READ_TRANSACTION":
            return { ...state, transactions: action.payload, loading: false }
        case "UPDATE_TRANSACTION":
            return { ...state, transactions: action.payload, loading: false }
        case "DELETE_TRANSACTION":
            return { ...state, transactions: action.payload, loading: false }
        default:
            return { ...state };
    }
}
export default transactionReducer