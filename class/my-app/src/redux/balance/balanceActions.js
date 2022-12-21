import { DEPOSIT, RESET, WITHDRAW } from "./balanceTypes";
/**
 * These are action creator functions
 */

/**
 * The deposit function returns an action object to be dispatched to the reducer.
 * @returns Action object with 2 properties (type and payload). This function returns a type of "DEPOSIT".
 */
export const deposit = () => {
	return {
		type: DEPOSIT,
		payload: 10,
	};
};

/**
 * The withdraw function returns an action object to be dispatched to the reducer.
 * @returns Action object with 2 properties (type and payload). This function returns a type of "WITHDRAW".
 */
export const withdraw = () => {
	return {
		type: WITHDRAW,
		payload: 10,
	};
};

export const reset = () => {
	return {
		type: RESET,
		payload: 0,
	};
};
