import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNotyfComponent } from './ngx-notyf.component';

describe('NgxNotyfComponent', () => {
  let component: NgxNotyfComponent;
  let fixture: ComponentFixture<NgxNotyfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNotyfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNotyfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
