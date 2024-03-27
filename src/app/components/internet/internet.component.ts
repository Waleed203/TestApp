import { Component, Input, OnInit, inject } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-internet",
  templateUrl: "./internet.component.html",
  styleUrls: ["./internet.component.scss"],
})
export class InternetComponent implements OnInit {
  @Input() openThis = false;
  modalCtrl = inject(ModalController);

  constructor() {}

  close() {
    this.openThis = false;
    this.modalCtrl.dismiss();
  }

  ngOnInit() {}
}
