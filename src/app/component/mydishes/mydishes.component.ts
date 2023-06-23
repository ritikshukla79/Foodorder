import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-mydishes',
  templateUrl: './mydishes.component.html',
  styleUrls: ['./mydishes.component.css']
})
export class MydishesComponent implements OnInit {
  @Input() favourite: any = [];
  @Input() mydishes: any = [];
  @Input() mysearch: any = [];
  @Input() bl1: number = -1;
  @Output() len = new EventEmitter;


  constructor() { }
  ngOnInit(): void {
  }

  deleteItem(t: any) {
    this.mydishes.splice(t, 1);
  }

  addtofav(data: any) {
    this.mydishes[data].fav = 1;
  }
  addtobucket(data: any) {
    let ob = 0;
    this.len.emit(++ob);
    this.mydishes[data].fav = 1;
  }

}
