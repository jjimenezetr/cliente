import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { Home } from './ui/home/home.component';
import { Usuario } from './ui/usuario/index/usuario.component';
import { FormUsuario } from './ui/usuario/Form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Usuario,
    FormUsuario
  ],
  imports: [
    BrowserModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
