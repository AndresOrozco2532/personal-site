import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { COLOR_TEMPLATE, SIZES } from '../../enums/layout.enum';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class LoadingComponent {
  @Input() size!: SIZES;
  @Input() color!: COLOR_TEMPLATE;
  @Input() isRelative!: boolean;
}
