import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bmcitemlist',
  templateUrl: './bmcitemlist.component.html',
  styleUrls: ['./bmcitemlist.component.css']
})
export class BmcitemlistComponent {

  @Input() name: string;

  constructor() { }


}
