import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FEATURES } from './core/constants/feature.constants';

const routes: Routes = [
  {
    path: FEATURES.PUBLIC.PATH,
    loadChildren: () =>
      import('./presentation/features/public/public.module').then(
        (m) => m.PublicModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
