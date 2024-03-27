import { Component, OnInit, inject } from "@angular/core";
import {
  BackgroundColorOptions,
  StatusBar,
  Style,
} from "@capacitor/status-bar";
import { Capacitor } from "@capacitor/core";
import { GlobalService } from "./services/global.service";
import { NavController } from "@ionic/angular";
import { InternetService } from "./services/internet.service";
import { UtilsService } from "./services/utils.service";
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  title = 'Waleed';
  global = inject(GlobalService);
  utils = inject(UtilsService);
  nav = inject(NavController);
  internet = inject(InternetService);
  storage = inject(Storage);

  constructor() {
    this.checkConnection();
  }

  checkConnection() {
    this.internet.checkInternet();

    this.internet.getInternetState$.subscribe((value) => {
      console.log("value for internet state = ", value);
      console.log("in it 1");
      if (value == false) {
      } else {
        // do nothing here
        // this.utils.presentToast("Internet Connection Restored");
      }
    });
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.global.get("uid").then(
      (uid) => {
        console.log("uid = ", uid);
        if (uid) {
          this.nav.navigateRoot("tabs/tab1");
        } else {
          this.nav.navigateRoot("login");
        }
      },
      (er) => {
        console.log("uid error", er);
      },
    );
  }

  async ngOnInit() {
    if (Capacitor.isPluginAvailable("StatusBar")) {
      StatusBar.setStyle({
        style: Style.Dark,
      });
      StatusBar.setBackgroundColor({ color: "#5453FC" });
    }
  }
}
