import { Injectable } from '@angular/core';
import { LANGUAGES } from '@app/core/i18n/constants/translate.constants';
import * as appActions from '@app/domain/store/app/app.actions';
import { THEMES } from '@app/presentation/assets/enum/theme.enum';
import { Store } from '@ngrx/store';
import * as appSelectors from '@store/app/app.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  public language$: Observable<string>;
  public theme$: Observable<string>;
  public isDesktopScreen$: Observable<boolean>;

  constructor(private _store: Store) {
    this._setSelectors();
  }

  public initApp(): void {
    this._store.dispatch(appActions.initApp());
  }

  public updateTheme(theme: THEMES): void {
    this._store.dispatch(appActions.updateTheme({ theme }));
  }

  public updateLanguage(language: LANGUAGES) {
    this._store.dispatch(appActions.updateLanguage({ language }));
  }

  public updateIsDesktopScreen(isDesktopScreen: boolean) {
    this._store.dispatch(appActions.updateIsDesktopScreen({ isDesktopScreen }));
  }

  private _setSelectors() {
    this.language$ = this._store.select(appSelectors.selectLanguage);
    this.theme$ = this._store.select(appSelectors.selectTheme);
    this.isDesktopScreen$ = this._store.select(
      appSelectors.selectIsDesktopScreen
    );
  }
}
