import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioGetComponent } from './usuario-get.component';

describe('UsuarioGetComponent', () => {
  let component: UsuarioGetComponent;
  let fixture: ComponentFixture<UsuarioGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
