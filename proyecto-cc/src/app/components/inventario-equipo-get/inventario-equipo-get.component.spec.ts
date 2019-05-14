import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioEquipoGetComponent } from './inventario-equipo-get.component';

describe('InventarioGetComponent', () => {
  let component: InventarioEquipoGetComponent;
  let fixture: ComponentFixture<InventarioEquipoGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioEquipoGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioEquipoGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
