import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent  {

  

  passto:string | undefined;

  public salida(className: string):void{
    const elementList = document.querySelectorAll('.' + className);
   const element = elementList[0] as HTMLElement;
   element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  gohome(){
    location.href="https://www.facebook.com/iesenlazarocardenas/"
  }
  goDestacados(){
    this.passto = 'SCR1';
    this.salida(this.passto)
  }
  goNosotros(){
    this.passto ="SCR2";
    this.salida(this.passto)
  }
  goContacto(){
    this.passto ="SCR3";
    this.salida(this.passto)
  }
}
