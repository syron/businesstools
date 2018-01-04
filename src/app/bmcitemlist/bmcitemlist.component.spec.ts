import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcitemlistComponent } from './bmcitemlist.component';

describe('BmcitemlistComponent', () => {
  let component: BmcitemlistComponent;
  let fixture: ComponentFixture<BmcitemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmcitemlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcitemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
