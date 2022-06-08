import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnFocusActionComponent } from './on-focus-action.component';

describe('OnFocusActionComponent', () => {
  let component: OnFocusActionComponent;
  let fixture: ComponentFixture<OnFocusActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnFocusActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnFocusActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
