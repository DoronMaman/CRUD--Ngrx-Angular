import { ADD_USER, AddUser, REMOVE_USER, RemoveUser, EDIT_USER, editUser, ShowAllActionSuccess, showAllSuccess } from './../action/user-action';
import {Action, INIT} from "@ngrx/store";
import { User } from "src/app/models/user";
import { getMaxListeners } from "process";

const initialState : User[] = []

export function userReducer (state : User[] = initialState, action: Action): User[] {
  switch(action.type) {
    case ADD_USER:
      return [...state, (action as AddUser).userPaylod]
    case REMOVE_USER:
      return state.filter((state) => state.name !== (action as RemoveUser).userPaylod);

    case EDIT_USER:
      let editState = JSON.parse(JSON.stringify(state));

     console.log((action as editUser).userEdit.name);
      return [...editState];

      case ShowAllActionSuccess :{
        return (action as showAllSuccess).payloadAll;
      }
    default:
      return state;
  }
}
