import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './components/app/app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MonacoEditorModule } from './components/monaco-editor/monaco-editor.module';
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SliderComponent } from './components/slider/slider.component';
import { TabsModule } from './components/tabs/tabs.module';
import { FormModule } from './forms/forms.module';

const SHARED_COMPONENTS = [
  SectionContainerComponent,
  SideBarComponent,
  SliderComponent,
];

const SHARED_MODULES = [TranslateModule, FormModule, TabsModule];

@NgModule({
  declarations: [AppComponent, FooterComponent, ...SHARED_COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    MonacoEditorModule.forRoot(),
    ...SHARED_MODULES,
  ],
  exports: [MonacoEditorModule, ...SHARED_MODULES, ...SHARED_COMPONENTS],
})
export class LayoutModule {}
