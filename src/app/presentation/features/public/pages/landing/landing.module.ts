import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@app/presentation/layout/layout.module';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkTogetherComponent } from './components/work-together/work-together.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingPage } from './landing.page';

@NgModule({
  declarations: [
    LandingPage,
    HeroComponent,
    SkillsComponent,
    ServicesComponent,
    WorkTogetherComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, LayoutModule],
})
export class LandingModule {}
