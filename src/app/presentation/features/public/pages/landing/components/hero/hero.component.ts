import { Component, OnInit } from '@angular/core';
import { APP_CONSTANTS } from '@app/core/constants/app.constants';

@Component({
  selector: 'landing-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  public ownerName: string;

  ngOnInit(): void {
    this._setInitialValues();
  }
  private _setInitialValues() {
    this.ownerName = APP_CONSTANTS.OWNER_NAME;
  }
}
