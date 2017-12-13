import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardListingComponent } from './billboard-listing.component';

describe('BillboardListingComponent', () => {
  let component: BillboardListingComponent;
  let fixture: ComponentFixture<BillboardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillboardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
