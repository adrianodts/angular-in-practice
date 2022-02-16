import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localePt)

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeNewComponent } from './components/employee/employee-new/employee-new.component';
import { FormsModule } from '@angular/forms';
import { SalaryColorDirective } from './directives/salary-color.directive';
import { EmployeeNewModalComponent } from './components/employee/employee-new-modal/employee-new-modal.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';
import { EmployeeEditModalComponent } from './components/employee/employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from './components/employee/employee-delete-modal/employee-delete-modal.component';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';
import { ModalComponent } from './components/modal/modal.component';
//import { BaseModal } from './components/modal/base-modal.component'
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
    MyCurrencyPipe,
    ModalComponent,
    //BaseModal
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
