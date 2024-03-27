import { AbsoluteSourceSpan } from "@angular/compiler";
import { Injectable, inject } from "@angular/core";
import {
  AlertController,
  ModalController,
  LoadingController,
  ToastController,
} from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  loadingCtrl = inject(LoadingController);
  alertCtrl = inject(AlertController);
  toastCtrl = inject(ToastController);
  loader: any;
  toast: any;

  constructor() {}

  loadershow(content?: string) {
    this.loadingCtrl
      .create({
        cssClass: "loadingdiv",
        spinner: "crescent",
        message: content,
      })
      .then((res) => {
        res.present();
      });
  }

  hideLoader() {
    this.loadingCtrl
      .dismiss()
      .then((res) => {
        console.log("Loading dismissed!", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  async presentAlert(content) {
    let confirm = await this.alertCtrl.create({
      // header: title,
      message: content,
      cssClass: "globalalert",
      buttons: [
        {
          text: "OK",
          cssClass: "okbtn",
          handler: () => {},
        },
      ],
    });

    await confirm.present();
  }

  async presentToast(message) {
    this.toast = true;
    return await this.toastCtrl
      .create({
        message: message,
        duration: 3000,
        position: "bottom",
        cssClass: "customToast",
      })
      .then((a) => {
        a.present().then(() => {
          console.log("presented");
          if (!this.toast) {
            a.dismiss().then(() => console.log("abort presenting"));
          }
        });
      });
  }
}
