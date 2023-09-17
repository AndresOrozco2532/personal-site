import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabLabelComponent } from './tab-label/tab-label.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabBodyComponent } from './tab-body/tab-body.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabLabelProgressComponent } from './tab-label-progress/tab-label-progress.component';

const TAB = [
  TabBodyComponent,
  TabGroupComponent,
  TabItemComponent,
  TabLabelComponent,
  TabLabelProgressComponent,
];

@NgModule({
  declarations: TAB,
  exports: TAB,
  imports: [CommonModule],
})
export class TabsModule {}
