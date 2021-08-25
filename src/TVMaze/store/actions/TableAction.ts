import { ShowDetails } from "../types";

export const ADD_TABLE_ITEM = '@MOVIE_APP/ADD_TABLE_ITEM';
export const DELETE_TABLE_ITEM = '@MOVIE_APP/DELETE_TABLE_ITEM';

export type ActionTypes = 
| {type : typeof ADD_TABLE_ITEM, payload: {id: number, showList: ShowDetails[]}}
| {type: typeof DELETE_TABLE_ITEM, payload: number}

export const addTableItem = (id: number, showList: ShowDetails[]): ActionTypes=> ({
  type: ADD_TABLE_ITEM,
  payload: { id, showList}
});


export const removeTableItem = (indx: number): ActionTypes => ({
    type: DELETE_TABLE_ITEM,
    payload: indx
});