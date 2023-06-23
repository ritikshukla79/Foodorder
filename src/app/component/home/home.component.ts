import { isNgTemplate } from '@angular/compiler';
import { Component, IterableDiffers, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() sts: any;
  @Input() dishes: any;
  @Output() adddishes = new EventEmitter;
  @Input() favo: any;
  @Input() vegdish: any;
  @Input() nonvegdish: any;
  @Input() drinks: any;
  @Input() cart: any;
  searcheddishes: any = [];
  arr: any = [];
  bl: number = -1;
  len: number = 0;


  constructor() {
    this.arr = this.dishes;

  }

  ngOnInit(): void {

    this.addtofav();
  }

  // text: any = "";
  amount: number = 0;
  carts: any = [];
  addtodishes($event: any) {

    this.adddishes.emit($event);
    console.log($event);
  }
  addtofav() {
    this.favo = this.dishes.filter((item: any) => item.fav == 1);
  }
  add_to_cart() {
    this.amount = 0;
    let v = this.vegdish.filter((item: any) => item.fav == 1);
    let nv = this.nonvegdish.filter((item: any) => item.fav == 1);
    let d = this.drinks.filter((item: any) => item.fav == 1);
    this.carts = this.dishes.filter((item: any) => item.fav == 1);
    v.concat(nv);
    d.concat(v);
    this.carts.concat(d);
    
    for (let i = 0; i < this.carts.length; i++) {

      this.amount = this.amount + parseInt(this.carts[i].price);
    }
    for (let i = 0; i < nv.length; i++) {

      this.amount = this.amount + parseInt(nv[i].price);
    }
    for (let i = 0; i < v.length; i++) {

      this.amount = this.amount + parseInt(v[i].price);
    }
    for (let i = 0; i < d.length; i++) {

      this.amount = this.amount + parseInt(d[i].price);
    }
  }
  remove_from_cart(data: any) {
    this.cart.splice(data, 1);
    this.amount = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.amount = this.amount+(this.cart[i].price);
    }

    console.log(this.cart);

  }
  removefromcart(data: any) {
    
    this.amount = this.amount - parseInt(this.carts[data].price);
    
    this.carts.splice(data, 1);
    this.amount = 0;

  }
  alert2(){
    alert('Yay!! Your order is Successfully Placed!🥳')
  }
  searchitem(data: any) {
    this.arr = this.dishes;
    this.searcheddishes = [];
    this.bl = -1;
    if (data != "") {

      for (let i = 0; i < this.dishes.length; i++) {
        if (this.dishes[i].dishes.toLowerCase().includes(data.toLowerCase())) {

          this.searcheddishes.push(this.dishes[i]);

        }
      }

      if (this.searcheddishes.length == 0) {
        this.bl = 2;
      }

    }
    console.log(this.arr);
  }
  length($event: any) {
    this.len = this.len + $event.value;

  }
}
