import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})



export class InicioComponent{
  
  constructor(
    private FormBuilder: FormBuilder,
  ){}
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  FormMessages = this.FormBuilder.group(
    {
      message : ['',Validators.required],
      nombre : ['',Validators.required],
      correo : ['',Validators.required,Validators.pattern(this.emailPattern)],
      asunto : ['',Validators.required]
    }
  )

 

  
  ConvertirenMinusculas(control : FormControl){

    if (control.value.length < 120) {
      control.setValue(control.value.toLowerCase());
    }
    control.setValue(control.value.toLowerCase().substring(0, 120));
  }

  ngOnInit() {
    
  }

  async EnviarCorreo(){
    emailjs.init('O6TM2xYttg51HdD6H')
    let respuesta = await emailjs.send("service_kkiy4hu","template_c95nzge",{
      message: this.FormMessages.controls.message.value,
      correo:  this.FormMessages.controls.correo.value,
      nombre:  this.FormMessages.controls.nombre.value,
      asunto:  this.FormMessages.controls.asunto.value,
      });
      alert('Mensaje enviado con exito');
      this.FormMessages.reset();
  }


 @Input() data:any;

  ngOnChanges() {
    this.data
}
  
}
