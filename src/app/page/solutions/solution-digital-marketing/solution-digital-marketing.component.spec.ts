import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionDigitalMarketingComponent } from './solution-digital-marketing.component';

describe('SolutionDigitalMarketingComponent', () => {
  let component: SolutionDigitalMarketingComponent;
  let fixture: ComponentFixture<SolutionDigitalMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionDigitalMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionDigitalMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
