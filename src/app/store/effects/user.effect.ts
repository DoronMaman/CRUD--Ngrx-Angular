import { UserServiseService } from './../../user-servise.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from 'rxjs';
import { ShowAllAction, showAllSuccess } from '../action/user-action';

@Injectable()
export class UserEffect {

  constructor(
    private actions$: Actions,
    private userService: UserServiseService
  ) { }

  loadAllArticles$ = createEffect(() => this.actions$.pipe(
    ofType(ShowAllAction),
    switchMap(() =>
      this.userService.getAllUsers().pipe(
        map(data => new showAllSuccess(data))
      )
    )
  ));
      }
