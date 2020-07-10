import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabItemComponent } from './../../Item/tab-item/tab-item.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements OnInit {

  @ContentChildren(TabItemComponent) mytabs: QueryList<TabItemComponent>;

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
  }
}
