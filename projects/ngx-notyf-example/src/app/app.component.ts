import { Component } from '@angular/core';
import { INotyfOptions } from "notyf";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // message = "ngx-notyf-example is working";
  message =
    "Send us <b>an email</b> to get support <a style='color: white' href='/#No'>here</a>";
  config: Partial<INotyfOptions> = {
    duration: 100 * 1000,
    ripple: false,
    position: {
      x: "right",
      y: "top",
    },
    types: [
      {
        type: "info",
        background: "#2196f3",
      },
      {
        type: "error",
        background: "indianred",
        duration: 2000,
        dismissible: true,
      },
    ],
  };
  type: "success" | "error" | string = "info";
}
