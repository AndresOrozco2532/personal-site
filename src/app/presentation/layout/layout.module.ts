import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutModule {}
