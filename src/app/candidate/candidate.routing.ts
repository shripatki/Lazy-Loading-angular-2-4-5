import {RouterModule, Routes} from '@angular/router';
import {CandidateComponent} from './candidate.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [{
    path: '', component: CandidateComponent
  }
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);







