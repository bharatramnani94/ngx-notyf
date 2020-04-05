import { Injectable } from '@angular/core';
import { Notyf, INotyfOptions, DEFAULT_OPTIONS, INotyfNotificationOptions } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class NgxNotyfService {

  notyf: Notyf = this.createInstance({});

  constructor() {}

  private createInstance(config: Partial<INotyfOptions>) {
    this.notyf = new Notyf({ ...DEFAULT_OPTIONS, ...config });
    return this.getInstance();
  }

  public getInstance(): Notyf {
    return this.notyf;
  }

  public setOptions(config: Partial<INotyfOptions>) {
    return this.createInstance(config);
  }

  public dismissAll() {
    return this.notyf.dismissAll();
  }

  public open(config: Partial<INotyfNotificationOptions>) {
    return this.notyf.open(config);
  }

  public success(payload: string | Partial<INotyfNotificationOptions>) {
    return this.notyf.success(payload);
  }

  public error(payload: string | Partial<INotyfNotificationOptions>) {
    return this.notyf.error(payload);
  }

  get notifications() {
    return this.notyf.notifications;
  }

  get options() {
    return this.notyf.options;
  }



}
