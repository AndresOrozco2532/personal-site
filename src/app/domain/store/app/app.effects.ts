import { Injectable } from '@angular/core';
import { AVAILABLE_THEMES } from '@app/core/constants/themes.constant';
import { DEFAULT_LANGUAGE } from '@app/core/i18n/constants/translate.constants';
import { ThemeService } from '@app/core/services/ui/theme.service';
import { LanguageService } from '@app/domain/services/app/language.service';
import { THEMES } from '@app/presentation/assets/enum/theme.enum';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as appActions from './app.actions';

@Injectable()
export class AppEffects {
  constructor(
    private _actions: Actions,
    private _store: Store,
    private _languageService: LanguageService,
    private _themeService: ThemeService
  ) {}

  public initApp$ = createEffect(
    () =>
      this._actions.pipe(
        ofType(appActions.initApp),
        tap(() => {
          this._store.dispatch(
            appActions.updateTheme({
              theme: AVAILABLE_THEMES[THEMES.DARK].NAME,
            })
          );
          this._store.dispatch(
            appActions.updateLanguage({ language: DEFAULT_LANGUAGE })
          );
        })
      ),
    { dispatch: false }
  );

  public updateLanguage$ = createEffect(
    () =>
      this._actions.pipe(
        ofType(appActions.updateLanguage),
        map(({ language }) => {
          this._languageService.setLanguage(language);
        })
      ),
    { dispatch: false }
  );

  public updateTheme$ = createEffect(
    () => {
      return this._actions.pipe(
        ofType(appActions.updateTheme),
        tap(({ theme }) => this._themeService.updateTheme(theme))
      );
    },
    { dispatch: false }
  );
}
