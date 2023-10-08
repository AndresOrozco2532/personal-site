import { Component, OnInit } from '@angular/core';
import { APP_CONSTANTS } from '@app/core/constants/app.constants';
import {
  DEFAULT_LANGUAGE,
  LANGUAGES_OPTIONS,
} from '@app/core/i18n/constants/translate.constants';
import { SideBarStyle } from '@app/core/models/side-bar.model';
import { AppFacade } from '@app/facade/app/app.facade';
import { ICONS_CSS_VAR } from '@app/presentation/assets/themes/miscellany/images';
import { SIZES } from '@app/presentation/layout/enums/layout.enum';
import { BUTTON_DESIGN_CLASS } from '@app/presentation/layout/forms/enums/fields.type';
import { SelectOption } from '@app/presentation/layout/forms/interfaces/form.interface';
import { SIDE_BAR_STYLES, TOOLS_SRC } from '../../constants/landing.constants';

@Component({
  selector: 'landing-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  public ownerName: string;
  public tools: string[];
  public barStyle: SideBarStyle;
  public barIcon: string;
  public languagesOptions: SelectOption<string>[] = LANGUAGES_OPTIONS;
  public language: SelectOption<string>;

  public SIZES = SIZES;
  public BUTTON_DESIGN_CLASS = BUTTON_DESIGN_CLASS;

  constructor(private _appFacade: AppFacade) {}

  ngOnInit(): void {
    this._setInitialValues();
  }

  public onUpdateLanguage(language): void {
    if (language) this._appFacade.updateLanguage(language);
  }

  private _setInitialValues() {
    this.language = LANGUAGES_OPTIONS.find(
      (language) => language.value === DEFAULT_LANGUAGE
    );
    this.ownerName = APP_CONSTANTS.OWNER_NAME;
    this.tools = TOOLS_SRC;
    this.barStyle = SIDE_BAR_STYLES.HERO;
    this.barIcon = ICONS_CSS_VAR.SECTION_HERO;
  }
}
