import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return `R$${value}`;
  // }

  transform(value: number, currencyCode: string = 'BRL', symbolDisplay: boolean = true, digits?: string): unknown {
    if (!value) {
      return '';
    }

    let currencyPipe: CurrencyPipe = new CurrencyPipe('pt-BR');
    let newValue = currencyPipe.transform(value, currencyCode, symbolDisplay, digits);

    return newValue;
  }

}
