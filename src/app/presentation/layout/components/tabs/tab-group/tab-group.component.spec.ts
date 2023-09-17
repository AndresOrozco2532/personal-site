import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TabItemComponent } from '../tab-item/tab-item.component';
import { TabGroupComponent } from './tab-group.component';

describe('TabGroupComponent', () => {
  let component: TabGroupComponent;
  let fixture: ComponentFixture<TabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TabGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be changes activeTabIndex', () => {
    component.activeTabIndex = 1;
    component.ngOnChanges({
      activeTabIndex: new SimpleChange(1, 2, true),
    });
    expect(component.activeTabIndex).toBe(1);
  });

  it('should be changes onSelectTab', () => {
    const tabItem: TabItemComponent = new TabItemComponent();
    const i: number = 0;
    component.activeTab = new TabItemComponent();
    component.onSelectTab(tabItem, i);
    expect(component.activeTab).toBe(tabItem);
  });
});
