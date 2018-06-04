import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CandidateComponent} from './candidate.component';
import {routing} from './candidate.routing';

@NgModule({
  imports: [CommonModule,routing],
  declarations: [CandidateComponent]
})
export class CandidateModule {
}
