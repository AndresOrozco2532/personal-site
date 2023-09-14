import { Component, OnInit } from '@angular/core';
import { APP_CONSTANTS } from '@app/core/constants/app.constants';
import { SIZES } from '@app/presentation/layout/enums/layout.enum';
import { BUTTON_DESIGN_CLASS } from '@app/presentation/layout/forms/enums/fields.type';
import { TOOLS_SRC } from '../../constants/landing.constants';

@Component({
  selector: 'landing-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  public ownerName: string;
  public tools: string[];

  public SIZES = SIZES;
  public BUTTON_DESIGN_CLASS = BUTTON_DESIGN_CLASS;

  ngOnInit(): void {
    this._setInitialValues();
  }
  private _setInitialValues() {
    this.ownerName = APP_CONSTANTS.OWNER_NAME;
    this.tools = TOOLS_SRC;
  }
}
