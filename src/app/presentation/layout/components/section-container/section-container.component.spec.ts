import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContainerComponent } from './section-container.component';

describe('SectionContainerComponent', () => {
  let component: SectionContainerComponent;
  let fixture: ComponentFixture<SectionContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionContainerComponent]
    });
    fixture = TestBed.createComponent(SectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
