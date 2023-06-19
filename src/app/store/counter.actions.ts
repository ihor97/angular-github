
// actions є для того щоб активізувати редюсери (тобто події )

import { Action, createAction, props } from "@ngrx/store";

export const increment=createAction(
    '[Counter] Increment',
    // дата
    props<{value:number}>()
);

// export const INCREMENT='[Counter] Increment'
// // альтернативний варіант 
// export class IncrementAction implements Action{
//  readonly type: string=INCREMENT;

// constructor(public value:number){

// }
// }

// export type CounterActions=IncrementAction 