import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  COLOR_TEMPLATE,
  SIZES,
} from '@app/presentation/layout/enums/layout.enum';
import { ORIENTATION } from '../../enums/fields.type';
import { SelectOption } from '../../interfaces/form.interface';

@Component({
  selector: 'form-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownComponent),
      multi: true,
    },
  ],
})
export class DropDownComponent implements OnInit, ControlValueAccessor {
  @Input() orientation: ORIENTATION = ORIENTATION.BOTTOM;
  @Input() colorTemplate: COLOR_TEMPLATE = COLOR_TEMPLATE.DARK;
  @Input() size: SIZES;
  @Input() options: SelectOption<string | number>[] = [];
  @Input() defaultOptionName: string | number = 'Default';
  @Input() canUnSelect: boolean = false;
  @Input() label: string;
  @Input() controlWithoutSpaces: boolean;
  @Input() onlyLable: boolean;
  @Output() changeValue: EventEmitter<string | number>;

  private _onChangefn = (_: any) => {};
  private _onTouch = () => {};
  public isDisabled: boolean;

  public isOpen = false;
  public TEMPLATES = COLOR_TEMPLATE;
  public ORIENTATION = ORIENTATION;
  public selectedKey: string;
  public selectedValue: string | number;
  constructor(private eRef: ElementRef) {
    this.changeValue = new EventEmitter();
  }

  ngOnInit(): void {}
  @HostListener('document:click', ['$event'])
  clickout() {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = this.isDisabled ? false : !this.isOpen;
    } else {
      this.isOpen = false;
    }
  }
  public selectOption(option: SelectOption<string | number>) {
    this.selectedValue = option?.value;
    this.selectedKey = option?.key;
    this.onChange();
  }

  writeValue(option: SelectOption<string | number>): void {
    if (!option) {
      this.onResetSelect();
      return;
    }
    this.selectOption(option);
  }

  registerOnChange(fn: any): void {
    this._onChangefn = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChange() {
    this._onChangefn(this.selectedValue);
    this.changeValue.emit(this.selectedValue);
  }

  onResetSelect() {
    this.selectOption({
      key: null,
      value: null,
    });
  }
}
