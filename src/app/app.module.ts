import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScearchTableComponent } from './scearch-table/scearch-table.component';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
// import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuItem, MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';

import { DropdownModule } from 'primeng/dropdown';
import { UserListComponent } from './user-list/user-list.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
// import { CalendarModule } from 'primeng/calendar';
import { UserformComponent } from './userform/userform.component';
import { UsertableComponent } from './usertable/usertable.component';
import { NoopInterceptor } from './request.intercept';
import { AuthGuard } from './auth.guard';
import { UserLogsTableComponent } from './user-logs-table/user-logs-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ScearchTableComponent,
    UserformComponent,
    UsertableComponent,
    LoginComponent,
    UserFormComponent,
    SidenavComponent,
    UserListComponent,
    UserLogsTableComponent
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
    ToastModule,
    InputTextareaModule,
    DialogModule,
    InputTextModule,
    PanelModule,
    DropdownModule,
    TabMenuModule,
    TableModule,
    CardModule,
    CheckboxModule,
    ProgressSpinnerModule
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true
    },
    MessageService,
    TabMenuModule,
    TableModule,
    CardModule,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
