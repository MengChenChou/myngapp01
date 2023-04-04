import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc04NgifelseComponent } from './myc04-ngifelse.component';

describe('Myc04NgifelseComponent', () => {
  let component: Myc04NgifelseComponent;
  let fixture: ComponentFixture<Myc04NgifelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc04NgifelseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc04NgifelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
