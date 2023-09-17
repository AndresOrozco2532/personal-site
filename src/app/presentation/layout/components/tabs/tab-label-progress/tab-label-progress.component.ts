import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'layout-tab-label-progress',
  templateUrl: './tab-label-progress.component.html',
  styleUrls: ['./tab-label-progress.component.scss'],
})
export class TabLabelProgressComponent {
  @ViewChild(TemplateRef)
  public labelContent: TemplateRef<any>;
}
