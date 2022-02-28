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
import { EmployeeDetailModalComponent } from './components/employee/employee-detail-modal/employee-detail-modal.component';
import { InputDirective } from './directives/input.directive';
import { GetViewContainerDirective } from './directives/get-view-container.directive';
import { TestDynamicComponentComponent } from './components/test-dynamic-component/test-dynamic-component.component';
import { ModalDynamicComponent } from './components/modal-dynamic/modal-dynamic.component'
import { ModalHeaderComponent } from './components/modal-dynamic/modal-header/modal-header.component'
import { ModalBodyComponent } from './components/modal-dynamic/modal-body/modal-body.component'
import { ModalFooterComponent } from './components/modal-dynamic/modal-footer/modal-footer.component';
import { TestModalDynamicComponent } from './components/test-modal-dynamic/test-modal-dynamic.component'
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
    EmployeeDetailModalComponent,
    TestDynamicComponentComponent,
    InputDirective,
    GetViewContainerDirective,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    TestModalDynamicComponent
    //BaseModal
  ], 
  entryComponents: [
    TestDynamicComponentComponent,
    EmployeeListComponent,
    ModalDynamicComponent,
    //TestModalDynamicComponent,
    EmployeeNewModalComponent,
    EmployeeEditModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
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
