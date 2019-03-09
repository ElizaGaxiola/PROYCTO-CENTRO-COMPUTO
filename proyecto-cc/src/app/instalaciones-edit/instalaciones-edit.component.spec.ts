import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionesEditComponent } from './instalaciones-edit.component';

describe('InstalacionesEditComponent', () => {
  let component: InstalacionesEditComponent;
  let fixture: ComponentFixture<InstalacionesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
