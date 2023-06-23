import { Component, OnInit } from '@angular/core';
import {  EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-favdishes',
  templateUrl: './favdishes.component.html',
  styleUrls: ['./favdishes.component.css']
})
export class FavdishesComponent implements OnInit {
  @Input() f: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  remove_from_fav(data: any) {
    this.f.splice(data, 1);
  }


}
