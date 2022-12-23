import { REMOVE_USER, SET_USERS } from "./userCTypes";

export const setUsers = (payload) => ({ type: SET_USERS, payload });

export const removeUser = (userIdToRemove) => ({ type: REMOVE_USER, payload: userIdToRemove });

// const highOrderComp = (WrappedComponent) => {
//     const store = {
//         pizzaStore: pizzaReducer,
//         userC: userReducer
//     }

//     const hoc = <WrappedComponent store={store} />
//     return hoc
// }

// const useSelector = (cb) => {
//     const state = cb(store)
//     return state
// }
