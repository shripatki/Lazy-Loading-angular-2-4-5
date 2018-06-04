import {NgModule} from '@angular/core';
import {RecruiterComponent} from './recruiter.component';
import {CommonModule} from '@angular/common';
import {routing} from './recruiter..routing';

@NgModule({
  imports: [CommonModule,routing],
  declarations: [RecruiterComponent]
})

export class RecruiterModule {
}
