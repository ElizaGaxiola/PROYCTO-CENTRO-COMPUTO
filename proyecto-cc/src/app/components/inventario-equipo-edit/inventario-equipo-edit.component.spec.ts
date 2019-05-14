import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioEquipoEditComponent } from './inventario-equipo-edit.component';

describe('InventarioEditComponent', () => {
  let component: InventarioEquipoEditComponent;
  let fixture: ComponentFixture<InventarioEquipoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioEquipoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioEquipoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
