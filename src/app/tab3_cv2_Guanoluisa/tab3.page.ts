import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController) {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Ey, estás en mi portfolio',
      buttons: ['OK']
    });

    await alert.present();
  }
}
