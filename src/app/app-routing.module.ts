import { Routes } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { GastosComponent } from './gastos/gastos.component';
import { PersonalComponent } from './personal/personal.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { InformacionComponent } from './informacion/informacion.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      { path: 'articulos', component: ArticulosComponent },
      { path: 'gastos', component: GastosComponent },
      { path: 'personal', component: PersonalComponent },
      { path: 'informacion', component: InformacionComponent },
    ],
  },
];
