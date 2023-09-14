import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './components/app/app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormModule } from './forms/forms.module';

const SHARED_MODULES = [TranslateModule, FormModule];

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [CommonModule, RouterModule, ...SHARED_MODULES],
  exports: [...SHARED_MODULES],
})
export class LayoutModule {}
