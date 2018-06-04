import {RouterModule, Routes} from '@angular/router';
import {RecruiterComponent} from './recruiter.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [{
  path: '', component: RecruiterComponent
}]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
