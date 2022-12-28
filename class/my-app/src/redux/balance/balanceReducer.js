import { DEPOSIT, RESET, WITHDRAW } from "./balanceTypes";

const initialState = 0;

/**
 * The balanceReducer is a pure function that will update the state in the redux store based on the action type and the payload provided in the action object.
 * @param {*} state The initial state or the previous state.
 * @param {*} action THe action object dispatched to the reducer.
 * @returns The new state.
 */
const balanceReducer = (state = initialState, action) => {
	switch (action.type) {
		case DEPOSIT:
			return state + parseInt(action.payload);

		case WITHDRAW:
			return state - parseInt(action.payload); // make sure that the balance is valid for withdraw

		case RESET:
			return parseInt(action.payload);

		default:
			return state;
	}
};

export default balanceReducer;
