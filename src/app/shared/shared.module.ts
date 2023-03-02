import { NgModule } from '@angular/core';
import { ScrollIndicatorDirective } from './directives/scroll-indicator.directive';
import { RouterModule } from '@angular/router';
import { SnackbarAlertComponent } from './components/snackbar-alert/snackbar-alert.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatModule } from '../material-module';
import { CommonModule } from '@angular/common';
import { HideTopHeaderDirective } from './directives/hide-top-header.directive';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DialogPopupVideoComponent } from './components/dialog-popup-video/dialog-popup-video.component';



@NgModule({
  declarations: [
    ScrollIndicatorDirective,
    SnackbarAlertComponent,
    LoaderComponent,
    HideTopHeaderDirective,
    SidebarComponent,
    DialogPopupVideoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatModule
  ],
  exports: [
    ScrollIndicatorDirective, 
    HideTopHeaderDirective, 
    SnackbarAlertComponent, 
    LoaderComponent, 
    SidebarComponent,
    DialogPopupVideoComponent  
  ]
})
export class SharedModule { }
