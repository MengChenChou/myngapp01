import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc08NgmodelPasswordComponent } from './myc08-ngmodel-password.component';

describe('Myc08NgmodelPasswordComponent', () => {
  let component: Myc08NgmodelPasswordComponent;
  let fixture: ComponentFixture<Myc08NgmodelPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc08NgmodelPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc08NgmodelPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
