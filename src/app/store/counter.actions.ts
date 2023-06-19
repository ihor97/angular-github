
// actions є для того щоб активізувати редюсери (тобто події )

import { createAction, props } from "@ngrx/store";

export const increment=createAction(
    '[Counter] Increment',
    // дата
    props<{value:number}>()
);



