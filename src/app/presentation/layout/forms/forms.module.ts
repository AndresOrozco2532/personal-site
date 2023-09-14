import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

const STANDALONE_COMPONENTS = [ButtonComponent];

const COMPONENTS = [InputComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    ...STANDALONE_COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
    ...STANDALONE_COMPONENTS,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: COMPONENTS,
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormModule {}
