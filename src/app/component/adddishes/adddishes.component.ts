import { Component, OnInit } from '@angular/core';
import {  EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-adddishes',
  templateUrl: './adddishes.component.html',
  styleUrls: ['./adddishes.component.css']
})
export class AdddishesComponent implements OnInit {
  @Output() addtodishesevent = new EventEmitter;
  h: any = "";
  imag: any = "";
  price:any="";
  type:any=" ";
  constructor() { }

  ngOnInit(): void {
  }

  
  addItem() {

    this.addtodishesevent.emit({ dishes: this.h, img: this.imag ,price:this.price,type:this.type})
    this.h = ""
    this.imag = ""
    this.price=""
    this.type=""
  }
}
