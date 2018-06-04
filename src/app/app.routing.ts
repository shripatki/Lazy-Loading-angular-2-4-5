import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {ModuleWithProviders} from '@angular/core';
import {AdminModule} from './admin/admin.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  {path: 'candidate', loadChildren: './candidate/candidate.module#CandidateModule' },
  {path: 'recruiter', loadChildren: './recruiter/recruiter.module#RecruiterModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
