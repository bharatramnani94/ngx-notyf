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
        y: "top",
      },
    });
    this.notyfInstance2 = this.ngxNotyfService.setOptions({
      position: {
        x: "left",
        y: "bottom",
      },
    });
    this.notyfInstance1.success("Message1, Using Instance1, Using Service");
    this.notyfInstance2.error("Message2, Using Instance2, Using Service");
  }



}
