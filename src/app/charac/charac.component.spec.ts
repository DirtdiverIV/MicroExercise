import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacComponent } from './charac.component';

describe('CharacComponent', () => {
  let component: CharacComponent;
  let fixture: ComponentFixture<CharacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacComponent]
    });
    fixture = TestBed.createComponent(CharacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
