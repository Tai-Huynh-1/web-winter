import { OPENCLOSE, RESET_ALL, SET_CHEESE, SET_COMBO, SET_PEPPERONI } from "./pizzaTypes";

const initalState = {
	isOpen: false,
	pepperoni: 0,
	combo: 0,
	cheese: 0,
};

const pizzaReducer = (state = initalState, action) => {
	switch (action.type) {
		case OPENCLOSE:
			return { ...state, isOpen: !state.isOpen };

		case SET_PEPPERONI:
			return { ...state, pepperoni: parseInt(action.payload) };

		case SET_COMBO:
			return;

		case SET_CHEESE:
			return;

		case RESET_ALL:
			return;

		default:
			return state;
	}
};

export default pizzaReducer;
