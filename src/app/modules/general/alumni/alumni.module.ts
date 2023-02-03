import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumniRoutingModule } from './alumni-routing.module';
import { AlumniComponent } from './alumni.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { AlumniMeetComponent } from './alumni-meet/alumni-meet.component';
import { TranscriptApplicationComponent } from './transcript-application/transcript-application.component';
import { OnlineGrievanceComponent } from './online-grievance/online-grievance.component';
import { SocialMediaComponent } from './social-media/social-media.component';


@NgModule({
  declarations: [
    AlumniComponent,
    SuccessStoriesComponent,
    AlumniMeetComponent,
    TranscriptApplicationComponent,
    OnlineGrievanceComponent,
    SocialMediaComponent
  ],
  imports: [
    CommonModule,
    AlumniRoutingModule
  ]
})
export class AlumniModule { }
