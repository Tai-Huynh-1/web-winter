import { OPENCLOSE, RESET_ALL, SET_CHEESE, SET_COMBO, SET_PEPPERONI } from "./pizzaTypes";

/**
 * A function that returns a redux action object. The action object updates the isOpen property of the pizza store.
 * @returns Action object with type OPENCLOSE. No payload.
 */
export const openClose = () => ({ type: OPENCLOSE });

export const setPepperoni = (payload) => ({ type: SET_PEPPERONI, payload });

export const setCombo = (payload) => ({ type: SET_COMBO, payload });

export const setCheese = (payload) => ({ type: SET_CHEESE, payload });

export const resetAll = () => ({ type: RESET_ALL });
