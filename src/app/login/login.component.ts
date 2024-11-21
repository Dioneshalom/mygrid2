import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<boolean>();
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login(event: Event) {
    console.log('Ejecutando login...');

    event.preventDefault();

    if (this.username === '2164259' && this.password === 'Angular_2164259') {
      this.errorMessage = '';
      this.loginSuccess.emit(true);


      console.log('Redirigiendo al menú'); 
      this.router.navigate(['/menu']).then(() => {
        console.log('Redirigido correctamente');
      }).catch((err) => {
        console.log('Error al redirigir:', err);
      });
    } else {
      this.errorMessage = 'Ups, incorrecto';
      this.loginSuccess.emit(false);
    }
  }
}



