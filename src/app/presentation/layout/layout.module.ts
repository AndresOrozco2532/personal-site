import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './components/app/app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FormModule } from './forms/forms.module';

const SHARED_COMPONENTS = [SectionContainerComponent, SideBarComponent];

const SHARED_MODULES = [TranslateModule, FormModule];

@NgModule({
  declarations: [AppComponent, FooterComponent, ...SHARED_COMPONENTS],
  imports: [CommonModule, RouterModule, ...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
})
export class LayoutModule {}
