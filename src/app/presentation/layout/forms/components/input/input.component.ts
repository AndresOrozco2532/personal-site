import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { COUNTRY_CONSTANTS } from '@app/core/constants/country.constants';
import { ICON_COLORS } from '@app/presentation/layout/components/icon/icon.constants';
import { FORM_CONSTANTS } from '../../constants/form.constants';
import { ICON_POSITION, INPUT_TYPE } from '../../enums/fields.type';
@Component({
  selector: 'form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent
  implements OnInit, AfterViewInit, ControlValueAccessor, Validator
{
  @Input() maxlength = 250;
  @Input() id = '';
  @Input() type?: INPUT_TYPE;
  @Input() label = '';
  @Input() required = true;
  @Input() disabled = false;
  @Input() regex = /./;
  @Input() regexInput = /./;
  @Input() hasTwoRegex = false;
  @Input() placeholder = '';
  @Input() inputmode = '';
  // Icon attributes
  @Input() icon?: string;
  @Input() iconPosition?: ICON_POSITION;
  @Input() iconColor?: ICON_COLORS = ICON_COLORS.NEUTRAL;
  // Icon Secondary attributes
  @Input() iconSecondary?: string;
  @Input() iconSecondaryPosition?: ICON_POSITION;
  @Input() iconSecondaryColor?: ICON_COLORS = ICON_COLORS.NEUTRAL;

  @Output() Blur: EventEmitter<any>;
  @Output() Input: EventEmitter<any>;
  @Output() Keydown: EventEmitter<any>;
  @ViewChild('boxIcon') boxIcon?: ElementRef;
  @ViewChild('boxIconSecondary') boxIconSecondary?: ElementRef;
  @ViewChild('inputEl') inputEl?: ElementRef;

  // Properties to update the value
  public value?: string;
  public valueUpdated?: string;
  public isDisabled?: boolean;
  public showPassword: boolean;
  public isPasswordComponent?: boolean;
  private _onChange = (_?: string | null) => {};
  private _onTouch = () => {};

  // Properties to update the styles
  public labelWidth?: string;
  public boxIconWidth?: number;

  constructor() {
    this.Blur = new EventEmitter();
    this.Input = new EventEmitter();
    this.Keydown = new EventEmitter();
    this.showPassword = false;
  }

  ngOnInit() {
    this.value = '';
    this.valueUpdated = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!(this.regex instanceof RegExp)) {
      this.regex = new RegExp(this.regex);
    }

    if (!this.hasTwoRegex) {
      this.regexInput = this.regex;
    }

    if (changes['icon'] && this.icon && !this.iconPosition) {
      this.iconPosition = ICON_POSITION.RIGHT;
    }

    if (
      changes['iconSecondary'] &&
      this.iconSecondary &&
      !this.iconSecondaryPosition
    ) {
      this.iconPosition = ICON_POSITION.LEFT;
    }

    if (changes['type']) {
      this._setupByType();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.icon) {
        this.boxIconWidth = this.boxIcon?.nativeElement?.offsetWidth + 30;
      }
    }, 0);
  }

  writeValue(value: string): void {
    this.value = value ?? '';
    this.valueUpdated = this.value;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onInput(event: any) {
    const value = event.data;
    const currentValue = event.target.value;
    this._onTouch();
    if (this.maxlength && currentValue.length > this.maxlength) {
      event.target.value = this.valueUpdated;
    }
    if (!value) {
      if (currentValue === '' || this.regexInput?.test(currentValue)) {
        this.valueUpdated = currentValue;
        this.Input.emit(event);
      } else {
        event.target.value = this.valueUpdated;
      }
      return;
    }
    if (!this.regexInput?.test(value)) {
      event.target.value = this.valueUpdated;
      return;
    }
    this.valueUpdated = event.target.value;
    this.Input.emit(event);
  }

  onEnter(event: any) {
    const ENTER_KEY = 13;
    this.Keydown.emit(event);
    if (event.keyCode === ENTER_KEY) this.onUpdateValue();
  }

  onUpdateValue() {
    this.value = this.valueUpdated;
    this._onChange(this.value);
    this.Blur.next(this.value);
  }

  onClickIcon(isSecondaryIcon: boolean = false) {
    this._setPasswordIcons(isSecondaryIcon);
  }

  public focus() {
    this.inputEl?.nativeElement.focus();
  }

  public buildPaddingInputWhenHasIcons() {
    const styles: any = {};
    styles[`padding-${this.iconPosition}`] = `${this.boxIconWidth}px`;

    return styles;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.required && this.valueUpdated?.length === 0) {
      return { required: 'Value is required' };
    }
    if (
      this.valueUpdated &&
      this.valueUpdated.length > 0 &&
      !this.regex.test(this.valueUpdated)
    ) {
      return { regex: 'Please fill a valid value' };
    }
    return null;
  }

  private _setupByType() {
    if (!this.type) this.type = INPUT_TYPE.TEXT;
    this.isPasswordComponent = this.type === INPUT_TYPE.PASSWORD;

    switch (this.type) {
      case INPUT_TYPE.TEXT:
        this.regex = /./;
        this.regexInput = /./;
        this.hasTwoRegex = false;
        this.inputmode = 'text';
        break;

      case INPUT_TYPE.SEARCH:
        this.regex = /./;
        this.regexInput = /./;
        this.hasTwoRegex = false;
        this.inputmode = 'search';
        break;

      case INPUT_TYPE.NUMBER:
        this.regex = FORM_CONSTANTS.REGEX.NUMBER;
        this.regexInput = FORM_CONSTANTS.REGEX.NUMBER;
        this.hasTwoRegex = false;
        this.inputmode = 'numeric';
        break;

      case INPUT_TYPE.DECIMAL:
        this.regex = FORM_CONSTANTS.REGEX.DECIMAL;
        this.regexInput = FORM_CONSTANTS.REGEX.DECIMAL;
        this.hasTwoRegex = false;
        this.inputmode = 'numeric';
        this.type = INPUT_TYPE.NUMBER;
        break;

      case INPUT_TYPE.PHONE:
        this.regex = FORM_CONSTANTS.REGEX.NUMBER;
        this.regexInput = FORM_CONSTANTS.REGEX.NUMBER;
        this.hasTwoRegex = false;
        this.maxlength = COUNTRY_CONSTANTS.US.phoneLength;
        this.inputmode = 'tel';
        break;

      case INPUT_TYPE.EMAIL:
        this.regex = FORM_CONSTANTS.REGEX.EMAIL;
        this.regexInput = FORM_CONSTANTS.REGEX.EMAIL_INPUT;
        this.hasTwoRegex = true;
        this.inputmode = 'email';
        break;

      case INPUT_TYPE.PASSWORD:
        this.regex = FORM_CONSTANTS.REGEX.PASSWORD;
        this.regexInput = /./;
        this.hasTwoRegex = true;
        this.inputmode = 'password';
        this.icon = 'uil-padlock';
        this.iconPosition = ICON_POSITION.LEFT;
        this.iconSecondary = 'uil-eye';
        this.iconSecondaryPosition = ICON_POSITION.RIGHT;
        break;
    }
  }

  private _setPasswordIcons(isSecondaryIcon: boolean) {
    if (this.isPasswordComponent && isSecondaryIcon) {
      this.showPassword = !this.showPassword;
      this.iconSecondary = this.showPassword ? 'uil-eye-slash' : 'uil-eye';
      this.type = this.showPassword ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD;
    }
  }
}
