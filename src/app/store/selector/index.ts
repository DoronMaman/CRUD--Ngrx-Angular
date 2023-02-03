import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';





export const selectUserState = (state: AppState) => state.users;

export const selectUser = createSelector(
  selectUserState,
  (state: User[]) => state
);
