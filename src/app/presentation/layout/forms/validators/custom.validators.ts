import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { FORM_CONSTANTS } from '../constants/form.constants';
import { FILE_TYPE } from '../enums/fields.type';

export class CustomValidators {
  static isNumber(control: AbstractControl): { [key: string]: boolean } | null {
    const regex: RegExp = new RegExp(FORM_CONSTANTS.REGEX.NUMBER);
    if (isNaN(parseInt(control.value)) || !regex.test(control.value)) {
      return { invalid_number: true };
    }
    return null;
  }

  static maxSizeFile(size: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (size <= control?.value?.size) {
        return { invalid_file_size: true };
      }

      return null;
    };
  }

  static allowedExtensions(extensions: Array<FILE_TYPE>): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value?.type) {
        const match = extensions.filter(
          (extension) => extension === control.value?.type
        );
        if (match && match.length > 0) {
          return null;
        } else {
          return { invalid_file_extension: true };
        }
      }

      return null;
    };
  }

  static isMatch(controlNameMatch: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const form = control?.parent as FormGroup;
      const otherValueToValidation = form?.controls[
        controlNameMatch
      ] as AbstractControl;

      if (!otherValueToValidation?.value || !control?.value) {
        return null;
      }

      if (control?.value !== otherValueToValidation.value) {
        return {
          [`invalid_match_${controlNameMatch.toLowerCase()}`]:
            'Passwords must match',
        };
      }

      return null;
    };
  }

  static equalValueValidator(
    targetKey: string,
    toMatchKey: string
  ): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      const target = group.controls[targetKey];
      const toMatch = group.controls[toMatchKey];
      if (target.touched && toMatch.touched) {
        const isMatch = target.value === toMatch.value;
        // set equal value error on dirty controls
        if (!isMatch && target.valid && toMatch.valid) {
          toMatch.setErrors({ equal_value: targetKey });
          const message: string = `${targetKey} !=  ${toMatchKey}`;
          return { equal_value: message };
        }
        if (isMatch && toMatch.hasError('equal_value')) {
          toMatch.setErrors(null);
        }
      }

      return null;
    };
  }
}
