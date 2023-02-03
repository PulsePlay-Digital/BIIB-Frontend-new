import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  
  {
    path: 'contact',
    data: { breadcrumb: 'Contact' },
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(m => m.AboutModule)
  },
  {
    path: 'placement',
    loadChildren: () => import('./modules/general/placements/placements.module')
      .then(p => p.PlacementsModule)
  },
  {
    path: 'admission',
    loadChildren: () => import('./modules/general/admissions/admissions.module')
      .then(a => a.AdmissionsModule)
  },
  {
    path: 'mba-program',
    loadChildren: () => import('./modules/general/mba-programs/mba-programs.module')
      .then(mba => mba.MbaProgramsModule)
  },
  {
    path: 'industry-program',
    loadChildren: () => import('./modules/general/industry-interface/industry-interface.module')
      .then(i => i.IndustryInterfaceModule)
  },
  {
    path: 'student-life',
    loadChildren: () => import('./modules/general/student-life/student-life.module')
      .then(s => s.StudentLifeModule)
  },
  {
    path: 'alumni',
    loadChildren: () => import('./modules/general/alumni/alumni.module')
      .then(a => a.AlumniModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
