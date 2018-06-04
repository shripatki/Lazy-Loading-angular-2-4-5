import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LandingComponent} from './landing/landing.component';
import {routing} from './app.routing';
import {CandidateComponent} from './candidate/candidate.component';
import {RecruiterComponent} from './recruiter/recruiter.component';
import {AdminModule} from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
