import { Component, OnInit } from '@angular/core';
import { SideBarStyle } from '@app/core/models/side-bar.model';
import { ICONS_CSS_VAR } from '@app/presentation/assets/themes/miscellany/images';
import {
  SERVICES,
  SIDE_BAR_STYLES,
  ServiceCard,
} from '../../constants/landing.constants';

@Component({
  selector: 'landing-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  public barStyle: SideBarStyle;
  public barIcon: string;
  public services: ServiceCard[];

  ngOnInit(): void {
    this._setInitialValues();
  }

  private _setInitialValues() {
    this.barStyle = SIDE_BAR_STYLES.SERVICES;
    this.barIcon = ICONS_CSS_VAR.SECTION_SERVICES;
    this.services = SERVICES;
  }
}
