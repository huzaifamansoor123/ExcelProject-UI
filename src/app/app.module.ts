import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScearchTableComponent } from './scearch-table/scearch-table.component';
import { DropdownModule } from 'primeng/dropdown';



import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
// import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem, MessageService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';



@NgModule({
  declarations: [
    AppComponent,
    ScearchTableComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientXsrfModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    DropdownModule,
    ToastModule,
    InputTextareaModule,
    DialogModule,
    InputTextModule,
    PanelModule,
    MessageService,
    TabMenuModule,
    TableModule,
    CardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
