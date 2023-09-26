import { Injectable } from '@angular/core';
import { Contact } from '@app/core/models/contact.model';
import * as LandingActions from '@app/domain/store/landing/landing.actions';
import { Store } from '@ngrx/store';
import * as landingSelectors from '@store/landing/landing.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandingFacade {
  public isLoadingContact$: Observable<boolean>;

  constructor(private _store: Store) {
    this._setSelectors();
  }

  public sendContactEmail(contact: Contact): void {
    this._store.dispatch(LandingActions.sendContactEmail({ contact }));
  }

  private _setSelectors() {
    this.isLoadingContact$ = this._store.select(
      landingSelectors.selectIsLoadingContact
    );
  }
}
