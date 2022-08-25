import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendallaveroComponent } from './tiendallavero.component';

describe('TiendallaveroComponent', () => {
  let component: TiendallaveroComponent;
  let fixture: ComponentFixture<TiendallaveroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendallaveroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendallaveroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
