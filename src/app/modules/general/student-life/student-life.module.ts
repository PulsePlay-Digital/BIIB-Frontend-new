import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentLifeRoutingModule } from './student-life-routing.module';
import { StudentLifeComponent } from './student-life.component';
import { StudentCouncilComponent } from './student-council/student-council.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { LibraryComponent } from './library/library.component';
import { HostelComponent } from './hostel/hostel.component';
import { CafeteriaMessComponent } from './cafeteria-mess/cafeteria-mess.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { MatModule } from 'src/app/material-module';


@NgModule({
  declarations: [
    StudentLifeComponent,
    StudentCouncilComponent,
    InfrastructureComponent,
    LibraryComponent,
    HostelComponent,
    CafeteriaMessComponent,
    FacilitiesComponent
  ],
  imports: [
    CommonModule,
    StudentLifeRoutingModule,
    MatModule
  ]
})
export class StudentLifeModule { }
