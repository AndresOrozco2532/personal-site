import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FORM_CONSTANTS } from '../constants/form.constants';

@Injectable({
  providedIn: 'root',
})
export class FormUtilService {
  public validErrors(form: UntypedFormGroup, formControl: string): boolean {
    return (
      form.get(formControl)?.errors &&
      (form.get(formControl)?.dirty || form.get(formControl)?.touched)
    );
  }

  public renderKeyError(errors: any): string | null {
    if (!errors) return null;
    const error: any = Object.keys(errors)
      .map((key) => `INPUT_ERROR_${key.toUpperCase()}`)
      .shift();
    return error ? FORM_CONSTANTS.GENERIC_KEY_ERRORS[error] ?? null : null;
  }
}
