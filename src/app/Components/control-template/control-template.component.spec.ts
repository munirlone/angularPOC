import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTemplateComponent } from './control-template.component';

describe('ControlTemplateComponent', () => {
  let component: ControlTemplateComponent;
  let fixture: ComponentFixture<ControlTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
