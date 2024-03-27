import { ChangeDetectorRef, Component, OnInit, inject } from "@angular/core";
import { GlobalService } from "../services/global.service";
import { NavController } from "@ionic/angular";
import { InternetService } from "../services/internet.service";
import { UtilsService } from "../services/utils.service";
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"],
})
export class ListPage implements OnInit {
  storage = inject(Storage);
  globalService = inject(GlobalService);
  utils = inject(UtilsService);
  nav = inject(NavController);
  internet = inject(InternetService);
  cd = inject(ChangeDetectorRef);
  page = 1;
  perPage = 20;
  totalPages: number;
  characters = [];
  openThis = false;
  populated = false;

  constructor() {}

  gotoCharacter(character) {
    this.nav.navigateForward([
      "details",
      { character: JSON.stringify(character) },
    ]);
  }

  handleRefresh(ev) {
    setTimeout(() => {
      ev.target.complete();
      this.ngOnInit();
    }, 1000);
  }

  ngOnInit() {}

  fetchData() {
    return new Promise((resolve, reject) => {
      this.globalService
        .sendHTTPClientRequest("character?page=" + this.page)
        .then(
          (response) => {
            console.log("response = ", response);

            // this.totalPages = Math.ceil(response.total / this.perPage);
            this.totalPages = response.info.pages;
            this.page++;
            this.characters.push(...response.results);
            this.populated = true;
            resolve("done");
          },
          (err) => {
            console.log("err = ", err);
            reject("err");
          },
        );
    });
  }

  loadData(event) {
    console.log("load more", this.page, this.totalPages);
    if (this.page <= this.totalPages) {
      this.fetchData().then(() => {
        event.target.complete();
      });
    } else {
      event.target.disabled = true;
    }
  }

  ionViewWillEnter() {
    this.checkUser();
    this.characters = [];
    this.populated = false;
    this.page = 1;
    this.fetchData();
    this.internet.getInternetState$.subscribe((value) => {
      console.log("in tab1 = ", value);
      if (value == false) {
        this.openThis = true;
        this.utils.presentToast("Internet disconnected");
        this.populated = true;
        this.cd.detectChanges();
      } else {
        this.openThis = false;
        this.fetchData();
        this.cd.detectChanges();
      }
    });
  }


  async checkUser() {
    await this.storage.create();
    this.globalService.get("uid").then(
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
}
