import { Component, OnInit, OnDestroy, Input, ViewEncapsulation } from '@angular/core';
import { Notyf, INotyfOptions, DEFAULT_OPTIONS } from 'notyf';


@Component({
  selector: "ngx-notyf",
  styleUrls: ["../../../../node_modules/notyf/notyf.min.css"],
  encapsulation: ViewEncapsulation.None,
  template: ``,
})
export class NgxNotyfComponent implements OnInit, OnDestroy {

  @Input() message: string = "Uh Oh! You forgot to provide 'message' again??"
  @Input() config: Partial<INotyfOptions> = {};
  @Input() type: string = "error"; // Default types: 'success', 'error'; Rest can be made custom using `types` in config

  public notyf: any;

  constructor() {}

  ngOnInit(): void {
    this.config = { ...DEFAULT_OPTIONS, ...this.config };
    this.notyf = new Notyf(this.config);
    this.notyf.open({
      type: this.type,
      message: this.message,
    });
  }

  ngOnDestroy(): void {
    if (this.notyf) {
      this.notyf.dismissAll();
    }
  }
}
