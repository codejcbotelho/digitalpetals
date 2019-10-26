import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionFinsisComponent } from './solution-finsis.component';

describe('SolutionFinsisComponent', () => {
  let component: SolutionFinsisComponent;
  let fixture: ComponentFixture<SolutionFinsisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionFinsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionFinsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
