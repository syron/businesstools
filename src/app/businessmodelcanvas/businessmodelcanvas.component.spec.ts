import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessmodelcanvasComponent } from './businessmodelcanvas.component';

describe('BusinessmodelcanvasComponent', () => {
  let component: BusinessmodelcanvasComponent;
  let fixture: ComponentFixture<BusinessmodelcanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessmodelcanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessmodelcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
