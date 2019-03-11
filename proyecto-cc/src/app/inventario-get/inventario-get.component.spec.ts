import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioGetComponent } from './inventario-get.component';

describe('InventarioGetComponent', () => {
  let component: InventarioGetComponent;
  let fixture: ComponentFixture<InventarioGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
