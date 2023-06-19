
import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

const initialState=0

export const counterReducer=createReducer(
    initialState,
    // слуїаємо подію
    // перший аргумент action
    // функція віиконується при події
    // ми не змінюємо state
    on(increment,(state)=>state+1)
)


// export function counterReducer(state = initialState) {
//     return initialState
// }