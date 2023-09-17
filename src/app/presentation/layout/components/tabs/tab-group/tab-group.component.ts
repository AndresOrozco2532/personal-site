import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { TABS_ALIGN_CLASS } from '@app/presentation/layout/enums/tab.enum';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
  selector: 'layout-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements AfterContentInit, OnChanges {
  @ContentChildren(TabItemComponent) tabs: QueryList<TabItemComponent>;
  @Output() tabChange: EventEmitter<number>;

  @Input() activeTabIndex: number = 0;
  @Input() tabsAlignClass!: TABS_ALIGN_CLASS;

  public tabItems$: Observable<TabItemComponent[]>;
  public activeTab: TabItemComponent;

  constructor() {
    this.tabChange = new EventEmitter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.activeTabIndex && this.tabs) {
      this.onSelectTab(
        this.tabs.toArray()[this.activeTabIndex],
        this.activeTabIndex
      );
    }
  }

  public ngAfterContentInit(): void {
    this.tabItems$ = this.tabs.changes
      .pipe(startWith(''))
      .pipe(delay(0))
      .pipe(
        map(() => {
          if (this.tabs)
            this.onSelectTab(
              this.tabs.toArray()[this.activeTabIndex],
              this.activeTabIndex
            );
          return this.tabs.toArray();
        })
      );
  }

  public onSelectTab(tabItem: TabItemComponent, i: number) {
    if (this.activeTab === tabItem) {
      return;
    }

    if (this.activeTab) {
      this.activeTab.isActive = false;
    }

    this.activeTab = tabItem;
    this.activeTabIndex = this.tabs.toArray().indexOf(tabItem);
    tabItem.isActive = true;
    this.tabChange.emit(i);
  }
}
