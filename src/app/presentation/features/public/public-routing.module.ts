import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FEATURES } from '@app/core/constants/feature.constants';

const routes: Routes = [
  {
    path: FEATURES.PUBLIC.PAGES.LANDING.PATH,
    loadChildren: () =>
      import('./pages/landing/landing.module').then((m) => m.LandingModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
