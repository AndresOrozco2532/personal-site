import { NgModule } from '@angular/core';
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';

import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { environment } from '@environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { MyHammerGestureConfig } from './core/classes/hammer-gesture-config';
import { HttpLoaderFactory } from './core/i18n/constants/translate.constants';
import { AppMockInterceptor } from './core/interceptors/app-mock.interceptor';
import { AppTranslateInterceptor } from './core/interceptors/app-translate.interceptor';
import { AppInterceptor } from './core/interceptors/app.interceptor';
import { appEffects, appReducers } from './domain/store';
import { AppComponent } from './presentation/layout/components/app/app.component';
import { LayoutModule } from './presentation/layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppTranslateInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppMockInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerGestureConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
