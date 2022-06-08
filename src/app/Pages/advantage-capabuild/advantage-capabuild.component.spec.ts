import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantageCapabuildComponent } from './advantage-capabuild.component';

describe('AdvantageCapabuildComponent', () => {
  let component: AdvantageCapabuildComponent;
  let fixture: ComponentFixture<AdvantageCapabuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantageCapabuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantageCapabuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
