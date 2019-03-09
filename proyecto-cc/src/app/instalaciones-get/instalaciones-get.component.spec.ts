import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionesGetComponent } from './instalaciones-get.component';

describe('InstalacionesGetComponent', () => {
  let component: InstalacionesGetComponent;
  let fixture: ComponentFixture<InstalacionesGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionesGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionesGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
