import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {routing} from './admin.routing';
import {AdminService} from './admin.service';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [AdminComponent],
  providers : [AdminService]
})

export class AdminModule {
}
