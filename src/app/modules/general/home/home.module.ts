import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GalleryModule,
    LightboxModule
  ]
})
export class HomeModule { }
