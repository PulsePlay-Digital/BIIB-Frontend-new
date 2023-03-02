import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { AdmissionsComponent } from './admissions.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { ApplyComponent } from './apply/apply.component';
import { ProcessComponent } from './process/process.component';
import { EducationLoanComponent } from './education-loan/education-loan.component';
import { FAQComponent } from './faq/faq.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdmissionsComponent,
    EligibilityComponent,
    ApplyComponent,
    ProcessComponent,
    EducationLoanComponent,
    FAQComponent,
    FeeStructureComponent
  ],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    SharedModule
  ],
  exports:[
    AdmissionsComponent
  ]
})
export class AdmissionsModule { }
