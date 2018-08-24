import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from './home/home.component';
import { Usuario } from './usuario/index/usuario.component';
import { FormUsuario } from './usuario/Form/form.component';

const appRoutes: Routes = [
  { path: 'Home', component: Home },
  { path: 'Usuario', component: Usuario },
  { path: 'FormUsuario', component: FormUsuario }
  
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
