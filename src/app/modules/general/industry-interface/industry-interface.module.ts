import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustryInterfaceRoutingModule } from './industry-interface-routing.module';
import { IndustryInterfaceComponent } from './industry-interface.component';
import { GuestLecturesComponent } from './guest-lectures/guest-lectures.component';
import { LeadershipTrainingComponent } from './leadership-training/leadership-training.component';
import { NationalBusinessTrainingComponent } from './national-business-training/national-business-training.component';
import { SpecialGuestVisitComponent } from './special-guest-visit/special-guest-visit.component';
import { InternshipComponent } from './internship/internship.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IndustryInterfaceComponent,
    GuestLecturesComponent,
    LeadershipTrainingComponent,
    NationalBusinessTrainingComponent,
    SpecialGuestVisitComponent,
    InternshipComponent
  ],
  imports: [
    CommonModule,
    IndustryInterfaceRoutingModule,
    SharedModule
  ]
})
export class IndustryInterfaceModule { }
