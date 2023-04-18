import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmFormularComponent } from './abm-formular.component';

describe('AbmFormularComponent', () => {
  let component: AbmFormularComponent;
  let fixture: ComponentFixture<AbmFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmFormularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
