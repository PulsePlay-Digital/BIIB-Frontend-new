import { NgModule } from '@angular/core';
import { ScrollIndicatorDirective } from './directives/scroll-indicator.directive';
import { RouterModule } from '@angular/router';
import { SnackbarAlertComponent } from './components/snackbar-alert/snackbar-alert.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatModule } from '../material-module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ScrollIndicatorDirective,
    SnackbarAlertComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatModule
  ],
  exports: [ScrollIndicatorDirective, SnackbarAlertComponent, LoaderComponent]
})
export class SharedModule { }
