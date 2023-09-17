import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'layout-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.scss']
})
export class TabBodyComponent {
  @ViewChild(TemplateRef) bodyContent: TemplateRef<any>;
}
