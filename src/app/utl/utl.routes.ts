import { Routes } from '@angular/router';

export default[
  {
    path:'listaalumnos',
    loadComponent:()=>import('./alumnos/alumnos.component').then(m=>m.AlumnosComponent)
  },
  {
    path:'agregar',
    loadComponent:()=>import('./agregar/agregar.component').then(m=>m.AgregarComponent)
  },
  {
    path:'eliminar/:matricula',
    loadComponent:()=>import('./eliminar/eliminar.component').then(m=>m.EliminarComponent)
  },
  {
    path:'editar/:matricula',
    loadComponent:()=>import('./editar/editar.component').then(m=>m.EditarComponent)
  },
]as Routes
