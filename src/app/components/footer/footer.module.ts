import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  exports: [
    FooterComponent
  ],
})
export class FooterModule { }
