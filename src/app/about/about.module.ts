import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AboutPage } from "./about.page";

import { AboutPageRoutingModule } from "./about-routing.module";
import { SharedModule } from "../components/shared.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    AboutPageRoutingModule,
  ],
  declarations: [AboutPage],
})
export class AboutPageModule {}
