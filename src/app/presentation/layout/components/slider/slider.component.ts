import { Component, Input } from '@angular/core';
import { Slider } from '@app/core/models/slider.model';

@Component({
  selector: 'layout-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() slider: Slider;
  @Input() isDisabled: boolean;
}
