import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItSectorComponent } from './it-sector/it-sector.component';
import { MouComponent } from './mou/mou.component';
import { NonItSectorComponent } from './non-it-sector/non-it-sector.component';
import { PastTrendComponent } from './past-trend/past-trend.component';
import { PlacementByYearComponent } from './placement-by-year/placement-by-year.component';
import { PlacementsComponent } from './placements.component';

const routes: Routes = [
  { path:'', component: PlacementsComponent,
  children:[
    { path: 'placement-by-year', component: PlacementByYearComponent },
    { path: 'mou', component: MouComponent },
    { path: 'IT-sector', component: ItSectorComponent },
    { path: 'Non-IT-sector', component: NonItSectorComponent },
    { path: 'past-trend', component: PastTrendComponent }
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacementsRoutingModule { }
