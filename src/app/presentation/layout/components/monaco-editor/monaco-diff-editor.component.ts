import { Component, Inject, Input } from '@angular/core';

import { BaseEditor } from './base-editor';
import { MONACO_EDITOR_CONFIG, MonacoEditorConfig } from './config';
import { DiffEditorModel } from './types';

declare var monaco: any;

@Component({
  selector: 'monaco-diff-editor',
  template: '<div class="editor-container" #editorContainer></div>',
  styles: [
    `
      .editor-container {
        width: 100%;
        height: 98%;
      }
    `,
  ],
})
export class MonacoDiffEditorComponent extends BaseEditor {
  _originalModel: DiffEditorModel;
  _modifiedModel: DiffEditorModel;

  @Input('options')
  set options(options: any) {
    this._options = Object.assign({}, this.config.defaultOptions, options);
    if (this._editor) {
      this._editor.dispose();
      this.initMonaco(options);
    }
  }

  get options(): any {
    return this._options;
  }

  @Input('originalModel')
  set originalModel(model: DiffEditorModel) {
    this._originalModel = model;
    if (this._editor) {
      this._editor.dispose();
      this.initMonaco(this.options);
    }
  }

  @Input('modifiedModel')
  set modifiedModel(model: DiffEditorModel) {
    this._modifiedModel = model;
    if (this._editor) {
      this._editor.dispose();
      this.initMonaco(this.options);
    }
  }

  constructor(
    @Inject(MONACO_EDITOR_CONFIG)
    private editorConfig: MonacoEditorConfig
  ) {
    super(editorConfig);
  }

  protected initMonaco(options: any): void {
    if (!this._originalModel || !this._modifiedModel) {
      throw new Error(
        'originalModel or modifiedModel not found for ngx-monaco-diff-editor'
      );
    }

    this._originalModel.language =
      this._originalModel.language || options.language;
    this._modifiedModel.language =
      this._modifiedModel.language || options.language;

    let originalModel = monaco.editor.createModel(
      this._originalModel.code,
      this._originalModel.language
    );
    let modifiedModel = monaco.editor.createModel(
      this._modifiedModel.code,
      this._modifiedModel.language
    );

    this._editorContainer.nativeElement.innerHTML = '';
    const theme = options.theme;
    this._editor = monaco.editor.createDiffEditor(
      this._editorContainer.nativeElement,
      options
    );
    options.theme = theme;
    this._editor.setModel({
      original: originalModel,
      modified: modifiedModel,
    });

    this.onInit.emit(this._editor);
  }
}
