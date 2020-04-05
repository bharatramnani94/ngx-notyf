import { Component, OnInit } from '@angular/core';
import { Notyf } from "notyf";
import { NgxNotyfService } from 'ngx-notyf';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {

  notyfInstance1: Notyf;
  notyfInstance2: Notyf;

  constructor(
    private ngxNotyfService: NgxNotyfService,
  ) {}

  ngOnInit(): void {
    this.notyfInstance1 = this.ngxNotyfService.setOptions({
      position: {
        x: "left",
        y: "bottom",
      },
    });
    this.notyfInstance2 = this.ngxNotyfService.setOptions({
      position: {
        x: "right",
        y: "bottom",
      },
    });
    this.notyfInstance1.success("Yes! Something was successful!");
    this.notyfInstance2.error("Uh Oh! Something went wrong!");
  }



}
