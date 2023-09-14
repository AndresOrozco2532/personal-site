import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [IconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be changes icon uil', () => {
    component.icon = 'uil-test';
    component.ngOnChanges({
      icon: new SimpleChange('uil-test', 'uil-testresult', true),
    });
    expect(component.type).toBe('uil');
  });

  it('should be changes icon mo', () => {
    component.icon = 'test';
    component.ngOnChanges({
      icon: new SimpleChange('test', 'testresult', true),
    });
    expect(component.type).toBe('mo');
  });
});
