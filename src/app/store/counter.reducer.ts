// reducer для того щоб ми могли змінювати дані в сторі

import { createReducer } from "@ngrx/store";

const initialState=0
export const counterReducer=createReducer(
    initialState
)