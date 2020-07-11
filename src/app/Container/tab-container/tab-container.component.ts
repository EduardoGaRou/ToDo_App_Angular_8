import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { TabItemComponent } from './../../Item/tab-item/tab-item.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabItemComponent) mytabs: QueryList<TabItemComponent>;
  @Output() selectedTab: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngAfterContentInit() {
  	const activeTabs = this.mytabs.filter(tab => tab.active);
  	if(!activeTabs.length) {
  	  this.onSelect(this.mytabs.first);
  	}
  }

  ngOnInit(): void {
  }

  onSelect(atab: TabItemComponent) {
  	this.mytabs.toArray().forEach(tabIt => tabIt.active = false);
  	atab.active = true;
    this.selectedTab.emit(atab);
  }
}
