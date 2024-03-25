import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BtnComponent } from "./btn/btn.component";
import { HeaderComponent } from "./header/header.component";
import { InternetComponent } from "./internet/internet.component";

@NgModule({
    declarations: [HeaderComponent, BtnComponent, InternetComponent],
    imports: [IonicModule, CommonModule, FormsModule],
    exports: [HeaderComponent, BtnComponent, InternetComponent],
})
export class SharedModule{}