import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XuLySuCoComponent } from './xu-ly-su-co.component';

describe('XuLySuCoComponent', () => {
  let component: XuLySuCoComponent;
  let fixture: ComponentFixture<XuLySuCoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XuLySuCoComponent]
    });
    fixture = TestBed.createComponent(XuLySuCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
