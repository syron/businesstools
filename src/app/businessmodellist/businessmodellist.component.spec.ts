import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessmodellistComponent } from './businessmodellist.component';

describe('BusinessmodellistComponent', () => {
  let component: BusinessmodellistComponent;
  let fixture: ComponentFixture<BusinessmodellistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessmodellistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessmodellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
