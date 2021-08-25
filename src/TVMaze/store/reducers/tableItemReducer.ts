import { ShowDetails, TableList } from '../types';
import {ActionTypes, ADD_TABLE_ITEM,DELETE_TABLE_ITEM } from '../actions/TableAction';

const handleClick = (id: number, showList: ShowDetails[], tableState: TableList): ShowDetails[] => {
    const filterItem: ShowDetails[] = showList.filter(show => show.show.id === id);
    const tableList = tableState.listItem;
    let checkDuplicate = tableList.every((listItem) => listItem.show.id !== id)
     if(checkDuplicate) return [...tableList, ...filterItem] 
     return tableList;
}

const initialState = {
    listItem: []
}
const TableItemReducer = (state: TableList = initialState, action: ActionTypes ): TableList => {
    switch(action.type){
        case ADD_TABLE_ITEM: 
          const { id, showList } = action.payload;
          return {
            listItem: handleClick(id, showList, state)
          }
        case DELETE_TABLE_ITEM: 
        let idx = action.payload;
          return {
            listItem : state.listItem.filter(item => item.show.id !== idx)
          }
        default:
         return state;
    }

}

export default TableItemReducer;