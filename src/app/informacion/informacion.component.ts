import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  standalone: true,
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent {
  nombre: string = 'Dione Shalom Siller Rodriguez';
  matricula: string = '2164259';
  actividad: string = 'PIA';
  fecha: string = '22 de Noviembre 2024';
  materia: string = 'Desarrollo de Paginas Web Dinámicas'
}
