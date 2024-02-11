import { combineReducers, createStore } from "redux"

// acounreducer
// userreducer
//loneruducer


const accountReducer = (state = { amount: 1000 }, action) => {
    if (action.type === "DEPOSITE_MONEY") {
        return { amount: state.amount + action.payload }
    }
    if (action.type === "WIDRAW_MONEY") {
        return { amount: state.amount - action.payload }
    }
    return state
}

const rootReducer = combineReducers({
    account: accountReducer
})

const reduxStore = createStore(rootReducer)

export default reduxStore