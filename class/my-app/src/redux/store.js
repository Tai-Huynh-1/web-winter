import { createStore, combineReducers } from "redux";
import balanceReducer from "./balance/balanceReducer";
import pizzaReducer from "./pizza/pizzaReducer";
import userCReducer from "./usersC/userCReducer";

const rootReducer = combineReducers({
	pizza: pizzaReducer,
	balance: balanceReducer,
	usersC: userCReducer,
});

export const store = createStore(rootReducer);
