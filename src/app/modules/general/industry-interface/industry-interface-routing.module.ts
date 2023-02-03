import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestLecturesComponent } from './guest-lectures/guest-lectures.component';
import { IndustryInterfaceComponent } from './industry-interface.component';
import { InternshipComponent } from './internship/internship.component';
import { LeadershipTrainingComponent } from './leadership-training/leadership-training.component';
import { NationalBusinessTrainingComponent } from './national-business-training/national-business-training.component';
import { SpecialGuestVisitComponent } from './special-guest-visit/special-guest-visit.component';

const routes: Routes = [
  {path: '', component: IndustryInterfaceComponent,
    children: [
      {path:'guest-lectures', component: GuestLecturesComponent},
      {path:'leadership-training', component: LeadershipTrainingComponent},
      {path:'national-business-training', component: NationalBusinessTrainingComponent},
      {path:'special-guest-visit', component: SpecialGuestVisitComponent},
      {path:'internship', component: InternshipComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustryInterfaceRoutingModule { }
