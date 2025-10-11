import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Zodiaco } from './zodiaco';

@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario!:FormGroup;
  textNombre!:string;
  textEdad!:string;
  textSigno!:string;
  imagenSigno!:string;
  objZod = new Zodiaco;


  ngOnInit():void{
    this.formulario = new FormGroup({
      nombre:new FormControl(''),
      aPaterno:new FormControl(''),
      aMaterno:new FormControl(''),
      dia:new FormControl(0),
      mes:new FormControl(0),
      anno:new FormControl(0),
      sexo:new FormControl("")
    });
  }

  Proceed(){
    this.objZod.nombre = this.formulario.value.nombre;
    this.objZod.aPaterno = this.formulario.value.aPaterno;
    this.objZod.aMaterno = this.formulario.value.aMaterno;
    this.objZod.anno = this.formulario.value.anno;
    this.objZod.sexo = this.formulario.value.sexo;
    this.objZod.fechaNac = new Date(this.formulario.value.anno, this.formulario.value.mes - 1, this.formulario.value.dia);
    this.objZod.CalcularSigno();
    this.textNombre = "Hola " + this.objZod.nombreFull;
    this.textEdad = "Tienes " + this.objZod.edad + " años";
    this.textSigno = "Tu signo zodiacal es " + this.objZod.signoNom;
    this.imagenSigno = this.objZod.signoImg;
  }

}
