import { AppTranslate } from '../app/app.translate.model';
import { PublicTranslate } from '../public/public.translate.model';

export interface LanguageTranslate {
  APP: AppTranslate;
  PUBLIC: PublicTranslate;
}
