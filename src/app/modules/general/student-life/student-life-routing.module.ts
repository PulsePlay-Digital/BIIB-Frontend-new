import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafeteriaMessComponent } from './cafeteria-mess/cafeteria-mess.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { HostelComponent } from './hostel/hostel.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { LibraryComponent } from './library/library.component';
import { StudentCouncilComponent } from './student-council/student-council.component';
import { StudentLifeComponent } from './student-life.component';

const routes: Routes = [
  {path:'', component: StudentLifeComponent,
    children: [
      {path:'student-council', component: StudentCouncilComponent },
      {path:'infrastructure', component: InfrastructureComponent},
      {path:'library', component: LibraryComponent},
      {path:'hostel', component: HostelComponent},
      {path:'cafeteria-mess', component: CafeteriaMessComponent},
      {path:'facilities', component: FacilitiesComponent}
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentLifeRoutingModule { }
