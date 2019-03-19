import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioGetComponent } from './edificio-get.component';

describe('EdificioGetComponent', () => {
  let component: EdificioGetComponent;
  let fixture: ComponentFixture<EdificioGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdificioGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
