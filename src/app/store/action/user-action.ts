// hero-actions.ts
import {Action, createAction, props} from "@ngrx/store";
import { User } from "src/app/models/user";

export const ADD_USER = 'ADD_USER';

export class AddUser implements Action {
  type: string = ADD_USER

  constructor(public userPaylod: User) {
  }
}

export const REMOVE_USER = 'REMOVE_USER';

export class RemoveUser implements Action {
  type: string = REMOVE_USER

  constructor(public userPaylod: string) {
  }
}

export const EDIT_USER = 'EDIT_USER'
export class editUser implements Action {
  type: string = EDIT_USER

  constructor(public userEdit: User) {

  }


}
export const ShowAllAction = 'SHOW_ALL_USER';
export class showAll implements Action {
  type: string = ShowAllAction

}

// export const ShowAllSuccessAction = createAction('[ARTICLE] Show All Success', props<{ payload: User[]}>());

export const ShowAllActionSuccess = 'SHOW_ALL_USER_SUCCESS';

export class showAllSuccess implements Action {
  type: string = ShowAllActionSuccess

  constructor(public payloadAll: User[]) {

  }
}
