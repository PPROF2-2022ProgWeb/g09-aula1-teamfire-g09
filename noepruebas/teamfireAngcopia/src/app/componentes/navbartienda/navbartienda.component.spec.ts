import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbartiendaComponent } from './navbartienda.component';

describe('NavbartiendaComponent', () => {
  let component: NavbartiendaComponent;
  let fixture: ComponentFixture<NavbartiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbartiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbartiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
