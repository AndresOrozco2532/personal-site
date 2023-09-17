import { Component, ContentChild, Input } from '@angular/core';
import { TabBodyComponent } from '../tab-body/tab-body.component';
import { TabLabelProgressComponent } from '../tab-label-progress/tab-label-progress.component';
import { TabLabelComponent } from '../tab-label/tab-label.component';

@Component({
  selector: 'layout-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss'],
})
export class TabItemComponent {
  @Input() label: string;

  @Input() isActive: boolean;

  @ContentChild(TabBodyComponent) bodyComponent: TabBodyComponent;

  @ContentChild(TabLabelComponent) labelComponent: TabLabelComponent;

  @ContentChild(TabLabelProgressComponent)
  labelProgressComponent: TabLabelProgressComponent;
}
