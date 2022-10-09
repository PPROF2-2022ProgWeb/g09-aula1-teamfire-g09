import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendatazasComponent } from './tiendatazas.component';

describe('TiendatazasComponent', () => {
  let component: TiendatazasComponent;
  let fixture: ComponentFixture<TiendatazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendatazasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendatazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
