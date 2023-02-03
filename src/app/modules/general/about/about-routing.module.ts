import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { CareersComponent } from './careers/careers.component';
import { HistoryComponent } from './history/history.component';
import { LeadershipTeamComponent } from './leadership-team/leadership-team.component';
import { WhyBiibComponent } from './why-biib/why-biib.component';

const routes: Routes = [
  {
    path: '', component: AboutComponent,
    children: [
      { path: 'about-biib', component: WhyBiibComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'leadership-team', component: LeadershipTeamComponent },
      { path: 'career', component: CareersComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }