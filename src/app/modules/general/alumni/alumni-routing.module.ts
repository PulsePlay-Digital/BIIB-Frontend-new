import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniMeetComponent } from './alumni-meet/alumni-meet.component';
import { AlumniComponent } from './alumni.component';
import { OnlineGrievanceComponent } from './online-grievance/online-grievance.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { TranscriptApplicationComponent } from './transcript-application/transcript-application.component';

const routes: Routes = [
  {path: '', component: AlumniComponent,
    children: [
      {path: 'success-stories', component: SuccessStoriesComponent},
      {path: 'alumni-meet', component: AlumniMeetComponent},
      {path: 'transcript-application', component: TranscriptApplicationComponent},
      {path: 'online-grievance', component: OnlineGrievanceComponent},
      {path: 'social-media', component: SocialMediaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
