import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LoadingComponent } from '@app/presentation/layout/components/loading/loading.component';
import {
  COLOR_TEMPLATE,
  SIZES,
} from '@app/presentation/layout/enums/layout.enum';
import {
  BUTTON_DESIGN_CLASS,
  BUTTON_TYPE,
  ICON_POSITION,
} from '../../enums/fields.type';

@Component({
  selector: 'button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule, LoadingComponent],
  standalone: true,
})
export class ButtonComponent {
  @Input() designClass: BUTTON_DESIGN_CLASS = BUTTON_DESIGN_CLASS.PRIMARY;
  @Input() type: BUTTON_TYPE = BUTTON_TYPE.BUTTON;
  @Input() text!: string;
  @Input() isLoading!: boolean;
  @Input() isDisabled!: boolean;
  @Input() icon!: string;
  @Input() iconPosition!: ICON_POSITION;
  @Input() size!: SIZES;
  @Input() displayBlock!: boolean;

  public COLOR_TEMPLATES = COLOR_TEMPLATE;

  public ICON_POSITIONS = ICON_POSITION;
}
