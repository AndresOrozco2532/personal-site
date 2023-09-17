import { Component, TemplateRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'layout-tab-label',
  templateUrl: './tab-label.component.html',
  styleUrls: ['./tab-label.component.scss'],
})
export class TabLabelComponent {
  @Input() count: number;
  @ViewChild(TemplateRef)
  public labelContent: TemplateRef<any>;
}
