import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionesAddComponent } from './instalaciones-add.component';

describe('InstalacionesAddComponent', () => {
  let component: InstalacionesAddComponent;
  let fixture: ComponentFixture<InstalacionesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
