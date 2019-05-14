import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaGetComponent } from './categoria-get.component';

describe('CategoriaGetComponent', () => {
  let component: CategoriaGetComponent;
  let fixture: ComponentFixture<CategoriaGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
