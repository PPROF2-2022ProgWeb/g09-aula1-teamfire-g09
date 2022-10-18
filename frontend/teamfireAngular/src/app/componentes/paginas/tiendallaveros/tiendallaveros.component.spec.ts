import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendallaverosComponent } from './tiendallaveros.component';

describe('TiendallaverosComponent', () => {
  let component: TiendallaverosComponent;
  let fixture: ComponentFixture<TiendallaverosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendallaverosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendallaverosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
