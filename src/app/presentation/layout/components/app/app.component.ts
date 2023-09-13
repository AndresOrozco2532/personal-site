import { Component, HostListener, OnInit } from '@angular/core';
import { APP_CONSTANTS } from '@app/core/constants/app.constants';
import { AppFacade } from '@app/facade/app/app.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _appFacade: AppFacade) {
    this._appFacade.initApp();
  }

  ngOnInit(): void {
    this._setViewLarge();
  }

  @HostListener('window:resize', ['$event'])
  private _checkIsLarge() {
    this._setViewLarge();
  }

  private _setViewLarge(): void {
    const isDesktopScreen: boolean =
      window.innerWidth > APP_CONSTANTS.SIZE_LARGE_SCREEN;
    this._appFacade.updateIsDesktopScreen(isDesktopScreen);
  }
}
