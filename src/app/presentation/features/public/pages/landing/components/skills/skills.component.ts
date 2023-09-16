import { Component, OnInit } from '@angular/core';
import { SideBarStyle } from '@app/core/models/side-bar.model';
import { Slider } from '@app/core/models/slider.model';
import { ICONS_CSS_VAR } from '@app/presentation/assets/themes/miscellany/images';
import {
  SIDE_BAR_STYLES,
  SKILLS_LIST,
} from '../../constants/landing.constants';

@Component({
  selector: 'landing-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public barStyle: SideBarStyle;
  public barIcon: string;
  public skillList: Slider[];

  ngOnInit(): void {
    this._setInitialValues();
  }

  private _setInitialValues() {
    this.barStyle = SIDE_BAR_STYLES.SKILLS;
    this.barIcon = ICONS_CSS_VAR.SECTION_SKILLS;
    this.skillList = SKILLS_LIST;
  }
}
