import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioEquipoAddComponent } from './inventario-equipo-add.component';

describe('InventarioAddComponent', () => {
  let component: InventarioEquipoAddComponent;
  let fixture: ComponentFixture<InventarioEquipoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioEquipoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioEquipoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
