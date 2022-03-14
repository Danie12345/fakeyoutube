import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthervideosComponent } from './othervideos.component';

describe('OthervideosComponent', () => {
  let component: OthervideosComponent;
  let fixture: ComponentFixture<OthervideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthervideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthervideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
