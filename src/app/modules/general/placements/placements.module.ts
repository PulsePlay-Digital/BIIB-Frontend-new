import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementsRoutingModule } from './placements-routing.module';
import { PlacementsComponent } from './placements.component';
import { PlacementByYearComponent } from './placement-by-year/placement-by-year.component';
import { MouComponent } from './mou/mou.component';
import { ItSectorComponent } from './it-sector/it-sector.component';
import { NonItSectorComponent } from './non-it-sector/non-it-sector.component';
import { PastTrendComponent } from './past-trend/past-trend.component';
import { MatModule } from 'src/app/material-module';


@NgModule({
  declarations: [
    PlacementsComponent,
    PlacementByYearComponent,
    MouComponent,
    ItSectorComponent,
    NonItSectorComponent,
    PastTrendComponent
  ],
  imports: [
    CommonModule,
    PlacementsRoutingModule,
    MatModule
  ], 
  exports: [
    PlacementsComponent
  ],
})
export class PlacementsModule { }
