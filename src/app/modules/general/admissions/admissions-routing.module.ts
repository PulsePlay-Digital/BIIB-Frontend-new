import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionsComponent } from './admissions.component';
import { ApplyComponent } from './apply/apply.component';
import { EducationLoanComponent } from './education-loan/education-loan.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { FAQComponent } from './faq/faq.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { ProcessComponent } from './process/process.component';

const routes: Routes = [
  { path: '', component: AdmissionsComponent,
    children: [
      { path: 'eligibility', component: EligibilityComponent },
      { path: 'apply', component: ApplyComponent },
      { path: 'process', component: ProcessComponent },
      { path: 'education-loan', component: EducationLoanComponent },
      { path: 'FAQ', component: FAQComponent },
      { path: 'fee-structure', component: FeeStructureComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionsRoutingModule { }
