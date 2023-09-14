import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICON_COLORS } from './icon.constants';

@Component({
  selector: 'layout-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class IconComponent implements OnChanges {
  @Input() type: 'image' | 'material' | 'uil';
  @Input() icon: string;
  @Input() color: ICON_COLORS;
  @Input() size: string;

  public ICON_COLORS = ICON_COLORS;

  constructor() {
    if (!this.type) this.type = 'uil';
    if (!this.color) this.color = ICON_COLORS.TRANSPARENT;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isDefaultType = !this.type || this.type === 'uil';
    if (changes.icon && !!this.icon && isDefaultType) {
      const isUILIcon = this.icon.startsWith('uil');
      if (isUILIcon) this.type = 'uil';
    }
  }
}
