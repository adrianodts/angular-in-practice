import { Directive, ElementRef, HostListener, Injector, Input } from '@angular/core';
import { MyCurrencyPipe } from '.././pipes/my-currency.pipe';

@Directive({
  selector: '[salaryColor]',
  providers: [MyCurrencyPipe]
})
export class SalaryColorDirective {

  // decorator que permite que as diretivas sejam injetadas e visíveis 
  // também fora do componente.
  // @Input()
  // salaryColor: any;

  private pipe: MyCurrencyPipe;

  @Input()
  anotherValue: any;

  @Input()
  salaryColor: any;

  @HostListener('change') ngOnChanges() {
    const el: HTMLElement = this.element.nativeElement;
    const salary = parseFloat(this.salaryColor);
    let className = '';
    switch (true) {
      case salary <= 1000:
        className = 'salary-cheap';
        break;
      case salary <= 10000:
        className = 'salary-expensive';
        break;
      case salary > 10000:
        className = 'salary-extra-expensive';
        break;
      default:
        className = '';
    }
    el.className = className;
    //el.innerHTML = this.pipe.transform(salary) as string;
  }


  constructor(private element: ElementRef, private injector: Injector) {
    console.log(injector);
    this.pipe = injector.get(MyCurrencyPipe);
    // setTimeout(() => {
    //   const nativeElement: HTMLElement = this.element.nativeElement;
    //   nativeElement.className = this.getSalaryColor();
    //   nativeElement.innerHTML = this.salaryColor;
    //   para outros valores incluídos nas propriedades da diretiva
    //   console.log(this.anotherValue);
    //   //this.element.nativeElement.innerHtml = this.salaryColor;
    // } , 1000);
  }
}
