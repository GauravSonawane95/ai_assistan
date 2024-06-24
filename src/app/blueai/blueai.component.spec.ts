import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueaiComponent } from './blueai.component';

describe('BlueaiComponent', () => {
  let component: BlueaiComponent;
  let fixture: ComponentFixture<BlueaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
