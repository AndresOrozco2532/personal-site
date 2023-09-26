import { Injectable } from '@angular/core';
import { EmailApi } from '@app/data/api/email/email.api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import * as landingActions from './landing.actions';

@Injectable()
export class LandingEffects {
  constructor(private _actions: Actions, private _emailApi: EmailApi) {}

  sendContactEmail$ = createEffect(() =>
    this._actions.pipe(
      ofType(landingActions.sendContactEmail),
      switchMap(({ contact }) => {
        return this._emailApi.sendContactEmail(contact).pipe(
          map(() => landingActions.sendContactEmailSuccess()),
          catchError((_) => {
            console.log(_);
            return of(landingActions.sendContactEmailFailed());
          })
          // catchError((_) => of(landingActions.sendContactEmailFailed()))
        );
      })
    )
  );
}
