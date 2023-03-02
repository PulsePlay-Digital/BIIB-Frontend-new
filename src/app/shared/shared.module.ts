import { NgModule } from '@angular/core';
import { ScrollIndicatorDirective } from './directives/scroll-indicator.directive';
import { RouterModule } from '@angular/router';
import { SnackbarAlertComponent } from './components/snackbar-alert/snackbar-alert.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatModule } from '../material-module';
import { CommonModule } from '@angular/common';
import { HideTopHeaderDirective } from './directives/hide-top-header.directive';



@NgModule({
  declarations: [
    ScrollIndicatorDirective,
    SnackbarAlertComponent,
    LoaderComponent,
    HideTopHeaderDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatModule
  ],
  exports: [ScrollIndicatorDirective, HideTopHeaderDirective, SnackbarAlertComponent, LoaderComponent]
})
export class SharedModule { }
