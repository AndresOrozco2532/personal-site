import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { MONACO_EDITOR_CONFIG, MonacoEditorConfig } from './config';
import { MonacoDiffEditorComponent } from './monaco-diff-editor.component';
import { MonacoEditorComponent } from './monaco-editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MonacoEditorComponent, MonacoDiffEditorComponent],
  exports: [MonacoEditorComponent, MonacoDiffEditorComponent],
})
export class MonacoEditorModule {
  public static forRoot(
    config: MonacoEditorConfig = { defaultOptions: { theme: 'vs-dark' } }
  ): ModuleWithProviders<MonacoEditorModule> {
    return {
      ngModule: MonacoEditorModule,
      providers: [{ provide: MONACO_EDITOR_CONFIG, useValue: config }],
    };
  }
}
