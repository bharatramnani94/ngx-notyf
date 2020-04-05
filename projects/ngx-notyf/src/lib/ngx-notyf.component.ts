import { Component, OnInit, OnDestroy, Input, ViewEncapsulation } from '@angular/core';
import { Notyf } from 'notyf';
import { NgxNotyfService } from './ngx-notyf.service';


@Component({
  selector: "ngx-notyf",
  styleUrls: ["../../../../node_modules/notyf/notyf.min.css"],
  encapsulation: ViewEncapsulation.None,
  template: ``,
})
export class NgxNotyfComponent implements OnInit, OnDestroy {

  @Input() message: string = "Uh Oh! You forgot to provide 'message' again??"
  @Input() type: string = "error"; // Default types: 'success', 'error'; Rest can be made custom using `types` in config
  @Input() notyfInstance?: Notyf = this.getDefaultInstance();

  constructor(
    private ngxNotyfService: NgxNotyfService
  ) {
  }

  ngOnInit(): void {
    this.notyfInstance.open({
      type: this.type,
      message: this.message,
    });
  }

  ngOnDestroy(): void {
    if (this.notyfInstance) {
      this.notyfInstance.dismissAll();
    }
  }

  private getDefaultInstance(): Notyf {
    return this.ngxNotyfService.getInstance();
  }
}
