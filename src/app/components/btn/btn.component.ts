import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-btn",
  templateUrl: "./btn.component.html",
  styleUrls: ["./btn.component.scss"],
})
export class BtnComponent implements OnInit {
  @Input() title = "";
  @Input() form!: FormGroup;
  @Input() state = false;

  constructor() {}

  ngOnInit() {
    console.log("in btn component", this.title, this.state);
  }
}
