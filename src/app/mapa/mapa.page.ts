import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  constructor(private alertController: AlertController,private router: Router) { }

  ngOnInit() {
    this.startScan();
  }
  lectura = ""
  async startScan() {
    await BarcodeScanner.checkPermission({ force: true });
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan();

    if (result.hasContent) {
      this.lectura = result.content;
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Asistencia Registrada correctamente',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigate(["/folder/inbox"]); 
    }
  } 

}

