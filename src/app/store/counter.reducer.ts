// reducer для того щоб ми могли змінювати дані в сторі

import { createReducer } from "@ngrx/store";

const initialState=0

// export const counterReducer=createReducer(
//     initialState
// )

// Інший варіант створення редюсера (для старіших версій)
// виконується коли виконується action
// state = initialState якщо нічого не ініціалізовано в перший час
export function counterReducer(state = initialState) {
    return initialState
}