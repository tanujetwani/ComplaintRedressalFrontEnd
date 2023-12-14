import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpageComponent } from './customerpage.component';

describe('CustomerpageComponent', () => {
  let component: CustomerpageComponent;
  let fixture: ComponentFixture<CustomerpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerpageComponent]
    });
    fixture = TestBed.createComponent(CustomerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
