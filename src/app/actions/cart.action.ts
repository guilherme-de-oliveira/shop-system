import { Action } from "@ngrx/store";
import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
    Add = 'ADD',
    Remove = 'REMOVE',
    Clear = 'CLEAR',
    Increment = '[Counter Component] Increment',
}

export const Add = (product: any) => {
    return <Action>{ type: ActionTypes.Add, payload: product}
}
export const Opa = createAction(
    '[Cart Component] Cart',
    (product: any) => product 
)
export const Remove = (product: any) => {
    return <Action>{ type: ActionTypes.Remove, payload:product}
}

export const Clear = (product: any) => {
    return <Action>{ type: ActionTypes.Clear, payload: null}
}
