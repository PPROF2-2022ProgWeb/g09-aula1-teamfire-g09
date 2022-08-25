import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaremeraComponent } from './tiendaremera.component';

describe('TiendaremeraComponent', () => {
  let component: TiendaremeraComponent;
  let fixture: ComponentFixture<TiendaremeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaremeraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaremeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
