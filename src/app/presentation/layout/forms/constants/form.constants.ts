export const FORM_CONSTANTS = {
  REGEX: {
    NUMBER: /^[\d+]+$/,
    DECIMAL: /^[\d+.]+$/,
    LETTERS: /^[A-Za-zá-ú\s.]+$/,
    CODE: /^[A-Za-zá-ú\s0-9._+-]+$/,
    EMAIL: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    EMAIL_INPUT: /[A-Za-z0-9._%+-@]$/,
    PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*^#?&]{8,}$/,
    WEB_SITE:
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/,
    WEB_SITE_INPUT: /[A-Za-z0-9._%+-@]$/,
  },
  GENERIC_KEY_ERRORS: {
    INPUT_ERROR_EMAIL: 'It does not correspond to a valid email',
    INPUT_ERROR_REQUIRED: 'This field is required.',
    INPUT_ERROR_MINLENGTH: 'This field don`t has min length',
    INPUT_ERROR_MAXLENGTH: 'This field don`t has max length',
    INPUT_ERROR_MIN: 'This field don`t has min number',
    INPUT_ERROR_MAX: 'This field don`t has max number',
    INPUT_ERROR_PATTERN: 'This field don`t match with pattern',
    INPUT_ERROR_INVALID_NUMBER: 'This field is dont a number',
    INPUT_ERROR_INVALID_FILE_SIZE: 'File size no larger than 5MB',
    INPUT_ERROR_INVALID_FILE_EXTENSION:
      'Only CSV and excel files can be uploaded',
  },
  LANGUAJE: 'en',
  BACK_FILTERS_DATE_FORMAT: 'yyyy-MM-dd',
};
