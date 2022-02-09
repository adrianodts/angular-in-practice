import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localePt)

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { FormsModule } from '@angular/forms';
import { SalaryColorDirective } from './salary-color.directive';
import { EmployeeNewModalComponent } from './employee-new-modal/employee-new-modal.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertErrorComponent } from './alert-error/alert-error.component';
import { EmployeeEditModalComponent } from './employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from './employee-delete-modal/employee-delete-modal.component';
import { MyCurrencyPipe } from './my-currency.pipe'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    SalaryColorDirective,
    EmployeeNewModalComponent,
    AlertSuccessComponent,
    AlertErrorComponent,
    EmployeeEditModalComponent,
    EmployeeDeleteModalComponent,
    MyCurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID, 
    useValue: "pt-BR"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
