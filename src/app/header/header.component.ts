import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
// jquery $
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show = false;
  constructor() { }
  ngOnInit() {

  }
}
