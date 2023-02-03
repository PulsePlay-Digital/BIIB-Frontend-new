import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMbaComponent } from './about-mba/about-mba.component';
import { AICTEApprovalComponent } from './aicte-approval/aicte-approval.component';
import { ClassroomTrainingComponent } from './classroom-training/classroom-training.component';
import { InductionProgramComponent } from './induction-program/induction-program.component';
import { MbaProgramsComponent } from './mba-programs.component';

const routes: Routes = [
  { path: '', component: MbaProgramsComponent, children: [
      {path: 'about-mba', component: AboutMbaComponent},
      {path:'aicte-approval', component: AICTEApprovalComponent},
      {path:'induction-program', component: InductionProgramComponent},
      {path:'classroom-based-training', component: ClassroomTrainingComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MbaProgramsRoutingModule { }
