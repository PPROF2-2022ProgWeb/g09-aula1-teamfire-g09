import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaremerasComponent } from './tiendaremeras.component';

describe('TiendaremerasComponent', () => {
  let component: TiendaremerasComponent;
  let fixture: ComponentFixture<TiendaremerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaremerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaremerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
