import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAidKitComponent } from './first-aid-kit.component';

describe('FirstAidKitComponent', () => {
  let component: FirstAidKitComponent;
  let fixture: ComponentFixture<FirstAidKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstAidKitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAidKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
