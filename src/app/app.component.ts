import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'home' },
    { title: 'Tiempo', url: '/tiempo', icon: 'cloud' },
    { title: 'Asistencia', url: '/mapa', icon: 'map' },
    { title: 'Iniciar sesion', url: '/login', icon: 'person' },
  ];
  constructor(public router:Router, private menu:MenuController) {}

  compartirApp() {
    Share.share({
      title: 'Compartir myApp',
      url: 'https://www.duoc.cl/alumnos/',
      dialogTitle: 'Es perfecta !',
    });
  }
  cerrarSesion(){
    localStorage.removeItem("autenticado");
    this.router.navigate(["/login"]);
    this.menu.close();
  }

}
