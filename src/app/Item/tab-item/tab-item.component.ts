import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent implements OnInit {

  @Input() title: string;
  @Input() active = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
