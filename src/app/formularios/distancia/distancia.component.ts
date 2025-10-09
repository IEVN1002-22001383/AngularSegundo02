import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!:FormGroup;
  resultado!:any;
  objd = new Distancia;

  ngOnInit():void{
    this.formulario = new FormGroup({
      x1:new FormControl(''),
      y1:new FormControl(''),
      x2:new FormControl(''),
      y2:new FormControl('')
    });
  }

  proceder():void{
    this.objd.x1 = this.formulario.value.x1;
    this.objd.y1 = this.formulario.value.y1;
    this.objd.x2 = this.formulario.value.x2;
    this.objd.y2 = this.formulario.value.y2;
    this.objd.CalcDistancia();
    this.resultado = this.objd.resultado;
  }
}
