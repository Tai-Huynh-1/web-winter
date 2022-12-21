import { createStore, combineReducers } from "redux";
import balanceReducer from "./balance/balanceReducer";
import pizzaReducer from "./pizza/pizzaReducer";

const rootReducer = combineReducers({
	pizza: pizzaReducer,
	balance: balanceReducer,
});

export const store = createStore(rootReducer);
