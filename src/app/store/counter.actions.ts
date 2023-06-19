
// actions є для того щоб активізувати редюсери (тобто події )

import { createAction } from "@ngrx/store";

export const increment=createAction(
    // ідентифікатор для action
    // [Counter]  типу як айді для події
    '[Counter] Increment'
);



