import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MbaProgramsRoutingModule } from './mba-programs-routing.module';
import { MbaProgramsComponent } from './mba-programs.component';
import { AboutMbaComponent } from './about-mba/about-mba.component';
import { AICTEApprovalComponent } from './aicte-approval/aicte-approval.component';
import { InductionProgramComponent } from './induction-program/induction-program.component';
import { ClassroomTrainingComponent } from './classroom-training/classroom-training.component';


@NgModule({
  declarations: [
    MbaProgramsComponent,
    AboutMbaComponent,
    AICTEApprovalComponent,
    InductionProgramComponent,
    ClassroomTrainingComponent
  ],
  imports: [
    CommonModule,
    MbaProgramsRoutingModule
  ]
})
export class MbaProgramsModule { }
