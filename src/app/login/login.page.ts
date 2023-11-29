import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationController, MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;
  constructor(private alertController: AlertController, private router: Router, public fb: FormBuilder, private animationCtrl: AnimationController, public menuCtrl: MenuController) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required)
    })
  }

  

  ngOnInit() {
    //console.log('Nombre de usuario: ', this.nombreUsuario);
  }
  async ingresar() {
    var f = this.formularioLogin.value;

    var nombreUsuario = localStorage.getItem('nombreUsuario');
    var contrasenaUsuario = localStorage.getItem('contrasenaUsuario');

    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else if (nombreUsuario == f.nombre && contrasenaUsuario == f.contrasena) {
      localStorage.setItem('autenticado', 'true');
      this.router.navigate(["/folder/inbox"]);
    } else {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Datos incorrectos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
  }

}
