import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionCreateWebsiteComponent } from './solution-create-website.component';

describe('SolutionCreateWebsiteComponent', () => {
  let component: SolutionCreateWebsiteComponent;
  let fixture: ComponentFixture<SolutionCreateWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionCreateWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionCreateWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
