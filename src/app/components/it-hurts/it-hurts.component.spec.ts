import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItHurtsComponent } from './it-hurts.component';

describe('ItHurtsComponent', () => {
  let component: ItHurtsComponent;
  let fixture: ComponentFixture<ItHurtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItHurtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItHurtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
