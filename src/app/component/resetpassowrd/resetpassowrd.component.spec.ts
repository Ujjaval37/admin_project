import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpassowrdComponent } from './resetpassowrd.component';

describe('ResetpassowrdComponent', () => {
  let component: ResetpassowrdComponent;
  let fixture: ComponentFixture<ResetpassowrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpassowrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetpassowrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
