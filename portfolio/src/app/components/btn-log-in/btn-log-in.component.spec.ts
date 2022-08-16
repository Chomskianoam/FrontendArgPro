import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLogInComponent } from './btn-log-in.component';

describe('BtnLogInComponent', () => {
  let component: BtnLogInComponent;
  let fixture: ComponentFixture<BtnLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnLogInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
