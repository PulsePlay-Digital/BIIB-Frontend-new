import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { WhyBiibComponent } from './why-biib/why-biib.component';
import { HistoryComponent } from './history/history.component';
import { LeadershipTeamComponent } from './leadership-team/leadership-team.component';
import { CareersComponent } from './careers/careers.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponent
  ],
  declarations: [
    AboutComponent,
    WhyBiibComponent,
    HistoryComponent,
    LeadershipTeamComponent,
    CareersComponent
  ]
})
export class AboutModule { }