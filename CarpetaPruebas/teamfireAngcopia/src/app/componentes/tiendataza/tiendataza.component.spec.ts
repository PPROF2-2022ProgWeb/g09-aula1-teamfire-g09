import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendatazaComponent } from './tiendataza.component';

describe('TiendatazaComponent', () => {
  let component: TiendatazaComponent;
  let fixture: ComponentFixture<TiendatazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendatazaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendatazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
