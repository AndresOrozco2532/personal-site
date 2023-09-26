import { Contact } from '@app/core/models/contact.model';
import { createAction, props } from '@ngrx/store';

export const sendContactEmail = createAction(
  '[Landing Effects] Send Contact Email',
  props<{ contact: Contact }>()
);

export const sendContactEmailSuccess = createAction(
  '[Landing Effects] Send Contact Email Success'
);

export const sendContactEmailFailed = createAction(
  '[Landing Effects] Send Contact Email Failed'
);
