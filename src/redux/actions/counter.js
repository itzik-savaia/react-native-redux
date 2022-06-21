import { INCREMENT, DECREMENT } from "../types/types";

export const increment = (counter) => ({
    type: INCREMENT,
    payload: counter
})

export const decrement = (counter) => ({
    type: DECREMENT,
    payload: counter
})