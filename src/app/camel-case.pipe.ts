import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let valor: string;
    valor =  value as string;
    let valorSplit:string[];
    valorSplit = valor.split(' ');
    let resultado: string = '';
    for(let v of valorSplit){
      resultado += this.capitalize(v) + ' ';
    }
    return resultado;
  }

  capitalize(valor:string){
    return valor.substr(0,1).toUpperCase() + valor.substr(1).toLowerCase();
  }

}
