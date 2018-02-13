import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from "@angular/common/http";

import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DetailsComponent } from './details/details.component';
import { TasksComponent } from './tasks/tasks.component';

import { DoctorService } from "./service/doctor.service";
import { MessageService } from "./service/message.service";
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DetailsComponent,
    MessagesComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [DoctorService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
