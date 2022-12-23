import { REMOVE_USER, SET_USERS } from "./userCTypes";

const initalState = [];

const userCReducer = (state = initalState, action) => {
	switch (action.type) {
		case SET_USERS:
			return [...action.payload];

		case REMOVE_USER:
			return state.filter((user) => user.id !== parseInt(action.payload));

		default:
			return state;
	}
};

export default userCReducer;
