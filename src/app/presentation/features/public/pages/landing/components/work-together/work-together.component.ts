import { Component, OnInit } from '@angular/core';
import { SideBarStyle } from '@app/core/models/side-bar.model';
import { ICONS_CSS_VAR } from '@app/presentation/assets/themes/miscellany/images';
import { TabEditorModel } from '@app/presentation/layout/components/monaco-editor/types';
import { TABS_ALIGN_CLASS } from '@app/presentation/layout/enums/tab.enum';
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
  public barStyle: SideBarStyle;
  public barIcon: string;
  public tabs: TabEditorModel[];
  public TABS_ALIGN_CLASS = TABS_ALIGN_CLASS;
  public index: number;

  ngOnInit(): void {
    this._setInitialValues();
  }

  public onTabChange(tab: number) {
    this.index = tab;
  }

  private _setInitialValues() {
    this.barStyle = SIDE_BAR_STYLES.WORK_TOGETHER;
    this.barIcon = ICONS_CSS_VAR.SECTION_WORK_TOGETHER;
    this.tabs = CONSOLE_CODE_LANGUAGES;
  }

  public getTabIndex(language: CONSOLE_LANGUAGES): number {
    return this.tabs.map((tab) => tab.language).indexOf(language);
  }
}
