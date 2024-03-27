import { IonicModule } from "@ionic/angular";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ListPage } from "./list.page";

import { ListPageRoutingModule } from "./list-routing.module";
import { SharedModule } from "../components/shared.module";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ListPageRoutingModule,
  ],
  declarations: [ListPage],
})
export class ListPageModule {}
