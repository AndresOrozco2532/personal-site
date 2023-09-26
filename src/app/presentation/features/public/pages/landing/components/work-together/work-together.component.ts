import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { SideBarStyle } from '@app/core/models/side-bar.model';
import { AppFacade } from '@app/facade/app/app.facade';
import { LandingFacade } from '@app/facade/landing/landing.facade';
import { ICONS_CSS_VAR } from '@app/presentation/assets/themes/miscellany/images';
import { TabEditorModel } from '@app/presentation/layout/components/monaco-editor/types';
import { SIZES } from '@app/presentation/layout/enums/layout.enum';
import { TABS_ALIGN_CLASS } from '@app/presentation/layout/enums/tab.enum';
import {
  BUTTON_DESIGN_CLASS,
  BUTTON_TYPE,
  INPUT_TYPE,
} from '@app/presentation/layout/forms/enums/fields.type';
import { Observable } from 'rxjs';
import {
  CONSOLE_CODE_LANGUAGES,
  CONSOLE_LANGUAGES,
  SIDE_BAR_STYLES,
} from '../../constants/landing.constants';

@Component({
  selector: 'landing-work-together',
  templateUrl: './work-together.component.html',
  styleUrls: ['./work-together.component.scss'],
})
export class WorkTogetherComponent implements OnInit {
  public isDesktopScreen$: Observable<boolean>;
  public isLoadingContact$: Observable<boolean>;

  public barStyle: SideBarStyle;
  public barIcon: string;
  public tabs: TabEditorModel[];
  public index: number;
  public form: UntypedFormGroup;

  public TABS_ALIGN_CLASS = TABS_ALIGN_CLASS;
  public BUTTON_TYPE = BUTTON_TYPE;
  public BUTTON_DESIGN_CLASS = BUTTON_DESIGN_CLASS;
  public INPUT_TYPE = INPUT_TYPE;
  public SIZES = SIZES;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _appFacade: AppFacade,
    private _landingFacade: LandingFacade
  ) {}

  ngOnInit(): void {
    this._setInitialValues();
    this._setupForm();
  }

  public onTabChange(tab: number) {
    this.index = tab;
  }

  public onContact() {
    if (this.form.invalid) return;
    this._landingFacade.sendContactEmail(this.form.value);
  }

  private _setInitialValues() {
    this.isDesktopScreen$ = this._appFacade.isDesktopScreen$;
    this.isLoadingContact$ = this._landingFacade.isLoadingContact$;
    this.barStyle = SIDE_BAR_STYLES.WORK_TOGETHER;
    this.barIcon = ICONS_CSS_VAR.SECTION_WORK_TOGETHER;
    this.tabs = CONSOLE_CODE_LANGUAGES;
  }

  public getTabIndex(language: CONSOLE_LANGUAGES): number {
    return this.tabs.map((tab) => tab.language).indexOf(language);
  }

  private _setupForm() {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
}
