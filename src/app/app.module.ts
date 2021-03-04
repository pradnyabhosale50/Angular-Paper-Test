import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {MatButtonModule} from '@angular/material/button';
//import { DatePipe } from './date.pipe';

//import {BrowserAnimationsModule} from '@angular/animations';
const appRouts:Routes=[
 
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouts),
    ReactiveFormsModule, FormsModule ,
    MaterialModule,
    MatButtonModule
   // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
