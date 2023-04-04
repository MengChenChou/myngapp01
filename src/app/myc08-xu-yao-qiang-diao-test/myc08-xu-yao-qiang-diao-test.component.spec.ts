import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc08XuYaoQiangDiaoTestComponent } from './myc08-xu-yao-qiang-diao-test.component';

describe('Myc08XuYaoQiangDiaoTestComponent', () => {
  let component: Myc08XuYaoQiangDiaoTestComponent;
  let fixture: ComponentFixture<Myc08XuYaoQiangDiaoTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc08XuYaoQiangDiaoTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc08XuYaoQiangDiaoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
