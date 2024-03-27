import { Component, Input, OnInit, inject } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() title: String = "";
  @Input() showBack!: boolean;
  authService = inject(AuthService);
  alertCtrl = inject(AlertController);

  constructor() {}

  async logout() {
    let confirm = await this.alertCtrl.create({
      header: "Log Out",
      message: "Do you want to logout from your account?",
      cssClass: "input-alert",
      buttons: [
        {
          text: "Confirm",
          handler: async () => {
            this.authService.logout();
          },
        },
        {
          text: "Cancel",
          handler: async () => {},
        },
      ],
    });
    await confirm.present();
  }

  ngOnInit() {}
}
