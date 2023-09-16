import { Component, Input } from '@angular/core';
import { SideBarStyle } from '@app/core/models/side-bar.model';

@Component({
  selector: 'layout-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Input() icon: string;
  @Input() barStyles: SideBarStyle;
}
