
import { Action, createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

const initialState = 0

export const counterReducer=createReducer(
    initialState,
    on(increment,(state,action)=>state+action.value)
)

// альтернативний варіант коли немає ф-ї createReducer

// export function counterReducer(state = initialState, action: CounterActions | Action) {
//     if (action.type === INCREMENT) {
//         return state + (action as IncrementAction).value
//     }
//     return initialState
// }

