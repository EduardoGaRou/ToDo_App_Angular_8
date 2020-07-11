import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabItemComponent implements OnInit {

  @Input() title: string;
  @Input() active = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
