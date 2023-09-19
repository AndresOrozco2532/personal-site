import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'form-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true,
    },
  ],
})
export class TextAreaComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() placeholder?: string = '';

  public value: string;
  private _onChange = (_?: string | null) => {};
  private _onTouch = () => {};

  public ngOnInit(): void {
    this.value = '';
  }

  public writeValue(value: string): void {
    this.value = value ?? '';
  }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onChange(event: Event): void {
    this._onChange((<HTMLInputElement>event.target).value);
    this._onTouch();
  }

  public onInput(event: Event): void {
    this._onChange((<HTMLInputElement>event.target).value);
    this._onTouch();
  }
}
