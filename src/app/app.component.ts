import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { ModalService } from './components/modal-dynamic/modal.service';
import { TestDynamicComponentComponent } from './components/test-dynamic-component/test-dynamic-component.component';
import { TestModalDynamicComponent } from './components/test-modal-dynamic/test-modal-dynamic.component';
import { GetViewContainerDirective } from './directives/get-view-container.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-in-practice';

  // @ViewChild('employeeList', { read: ViewContainerRef })
  // viewContainer: any;

  // @ViewChild('template')
  // template: any;

  // injected on directive and it's already to
  @ViewChild(GetViewContainerDirective) 
  getViewContainer: any;

  private components = [TestDynamicComponentComponent, EmployeeListComponent]
  indexComponents = -1;

  // deprecated
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private modalService: ModalService) {

  }

  ngOnInit(): void {
    // this can be used on ngOnInit because of the directive GetViewContainerDirective.
    setInterval(() => {
      this.getViewContainer.viewContainerRef.clear();
      this.indexComponents ++;
      if (this.indexComponents === this.components.length) {
        this.indexComponents = 0;
      }
      this.getViewContainer.createComponent(this.components[this.indexComponents]);
    }, 4000);
    const modalRef = this.modalService.create(TestModalDynamicComponent);
    modalRef.show();
  }

  /*
  ngAfterViewInit() {
    // createEmbeddedView
    // console.log(this.viewContainer);
    // console.log(typeof (this.viewContainer === ViewContainerRef));
    // console.log(this.template);
    // this.viewContainer.createEmbeddedView(this.template);

    // ComponentFactoryResolver
    const factory = this.componentFactoryResolver.resolveComponentFactory(TestDynamicComponentComponent);
    setTimeout(() => {
      this.getViewContainer.viewContainerRef.createComponent(factory);
    }, 2000);

    // another way
    setTimeout(() => {
      this.getViewContainer.createComponent(TestDynamicComponentComponent);
    }, 2000);

    setInterval(() => {
      this.getViewContainer.viewContainerRef.clear();
      this.indexComponents ++;
      if (this.indexComponents === this.components.length) {
        this.indexComponents = 0;
      }
      this.getViewContainer.createComponent(this.components[this.indexComponents]);
    }, 4000)
  }
  */
}
