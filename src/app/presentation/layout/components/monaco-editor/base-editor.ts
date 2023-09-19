import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
} from 'rxjs';
import { MONACO_EDITOR_CONFIG, MonacoEditorConfig } from './config';

let loadedMonaco = false;
let loadPromise: Promise<void>;

@Component({
  template: '',
})
export abstract class BaseEditor
  implements OnChanges, AfterViewInit, OnDestroy
{
  @ViewChild('editorContainer', { static: true }) _editorContainer: ElementRef;
  @Input() refreshLayout: boolean = false;
  @Output() onInit = new EventEmitter<any>();
  protected _editor: any;
  protected _options: any;
  protected _windowResizeSubscription: Subscription;

  constructor(
    @Inject(MONACO_EDITOR_CONFIG) protected config: MonacoEditorConfig
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this._editor && !!changes['refreshLayout']?.currentValue) {
      loadPromise.then(() => {
        this._editor?.layout();
      });
    }
  }

  ngAfterViewInit(): void {
    if (loadedMonaco) {
      // Wait until monaco editor is available
      loadPromise.then(() => {
        this.initMonaco(this._options);
      });
    } else {
      loadedMonaco = true;
      loadPromise = new Promise<void>((resolve: any) => {
        const baseUrl =
          (this.config.baseUrl || './assets') + '/monaco-editor/min/vs';
        if (typeof (<any>window).monaco === 'object') {
          resolve();
          return;
        }
        const onGotAmdLoader: any = () => {
          // Load monaco
          (<any>window).require.config({ paths: { vs: `${baseUrl}` } });
          (<any>window).require([`vs/editor/editor.main`], () => {
            if (typeof this.config.onMonacoLoad === 'function') {
              this.config.onMonacoLoad();
            }
            this.initMonaco(this._options);
            resolve();
          });
        };

        // Load AMD loader if necessary
        if (!(<any>window).require) {
          const loaderScript: HTMLScriptElement =
            document.createElement('script');
          loaderScript.type = 'text/javascript';
          loaderScript.src = `${baseUrl}/loader.js`;
          loaderScript.addEventListener('load', onGotAmdLoader);
          document.body.appendChild(loaderScript);
        } else {
          onGotAmdLoader();
        }
      });

      // refresh layout on resize event.
      this._windowResizeSubscription = fromEvent(window, 'resize')
        .pipe(debounceTime(100), distinctUntilChanged())
        .subscribe(() =>
          loadPromise.then(() => {
            this._editor.layout();
          })
        );
    }
  }

  protected abstract initMonaco(options: any): void;

  ngOnDestroy() {
    if (this._windowResizeSubscription) {
      this._windowResizeSubscription.unsubscribe();
    }
    if (this._editor) {
      this._editor.dispose();
      this._editor = undefined;
    }
  }
}
