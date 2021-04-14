import { Component } from '@angular/core';
import { observable, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "In the previous section, we've seen how to use";
  livros: string[] = ['HONSHOU','MARINE','DESU~~'];
  filtro: string;

  addLivro(livro:string){
    this.livros.push(livro);
  }
  obterLivros(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }
    return this.livros.filter((v) => {
    if(v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0){
      return true;
    }
      return false;
    });
  }
  valorAsync = new Promise((resolve,reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2= new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });
}
