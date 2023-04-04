import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc04NgifelseHWComponent } from './myc04-ngifelse-hw.component';

describe('Myc04NgifelseHWComponent', () => {
  let component: Myc04NgifelseHWComponent;
  let fixture: ComponentFixture<Myc04NgifelseHWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc04NgifelseHWComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc04NgifelseHWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
