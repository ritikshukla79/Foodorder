import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() f: any;
  @Input() vegdish: any;
  @Input() nonvegdish: any;
  @Input() drinks: any;
  @Input() cart: any;
  total:any;

  constructor() { }

  ngOnInit(): void {
  }

  addtocart(data: any, i: any) {
    if (data.type == 'veg') {
      this.vegdish[i].fav = 1;
      this.total=this.total+this.nonvegdish[i].price;
    }

    else if (data.type == 'nonveg') {
      this.nonvegdish[i].fav = 1;
      this.total=this.total+this.nonvegdish[i].price;
    }

    else if (data.type == 'drink'){
      this.drinks[i].fav = 1;
      this.total=this.total+data.price;
    }
    
    
    this.cart.unshift(data);
    
    // console.log(this.total);
  }
  

}
