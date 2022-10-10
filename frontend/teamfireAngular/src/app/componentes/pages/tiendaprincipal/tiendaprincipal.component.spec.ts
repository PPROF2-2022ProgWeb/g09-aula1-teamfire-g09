import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaprincipalComponent } from './tiendaprincipal.component';

describe('TiendaprincipalComponent', () => {
  let component: TiendaprincipalComponent;
  let fixture: ComponentFixture<TiendaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaprincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
